import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import Module from 'node:module';
import ts from 'typescript';
const file = path.resolve(__dirname, '../src/lib/projects.ts');
const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const catalog = new Module(file);
catalog.filename = file;
catalog.paths = Module._nodeModulePaths(__dirname);
catalog._compile(compiled, file);
const { projects, filterProjects, githubUrl, categories } = catalog.exports;
test('catalog has exactly nine unique projects and the requested four featured projects', () => {
 assert.equal(projects.length, 9);
 assert.equal(new Set(projects.map(p => p.slug)).size, 9);
 assert.deepEqual(projects.filter(p => p.featured).map(p => p.repo), ['distributed-rag-inference', 'SignalRetention', 'expense-api', 'RL-cluster-scheduler']);
 assert.ok(projects.every(p => !/interface[.]?ai/i.test(p.name)));
});
test('search trims whitespace and finds technologies without case sensitivity', () => {
 assert.deepEqual(filterProjects('  sDl2  ', 'All Projects').map(p => p.slug), ['chip-8']);
 assert.equal(filterProjects('   ', 'All Projects').length, 9);
});
test('category and search compose rather than overriding each other', () => {
 assert.equal(filterProjects('PPO', 'AI / Machine Learning')[0].slug, 'rl-cluster-scheduler');
 assert.equal(filterProjects('PPO', 'Full-Stack Applications').length, 0);
 assert.equal(filterProjects('unmatched-example', 'All Projects').length, 0);
 for (const category of categories.slice(1)) assert.ok(filterProjects('', category).length > 0);
});
test('every project has a description, stack, one or two achievements, and a verified repository', () => {
 for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.equal(new URL(githubUrl(project)).hostname, 'github.com');
  assert.ok(project.description && project.stack.length);
  assert.ok(project.achievements.length >= 1 && project.achievements.length <= 2);
  assert.ok(project.achievements.every(achievement => typeof achievement === 'string' && achievement.length > 0));
 }
});
test('inference benchmark preserves its measurement boundary and scheduler its trade-off', () => {
 assert.match(projects[0].achievementNote, /not end-to-end/);
 assert.match(projects[3].achievements.join(' '), /lower throughput/);
});

// Render actual cards so link and missing-link behavior is covered as well as data.
const cardFile = path.resolve(__dirname, '../src/components/projects/PortfolioCard.tsx');
const cardModule = new Module(cardFile);
cardModule.filename = cardFile;
cardModule.paths = Module._nodeModulePaths(__dirname);
const originalRequire = cardModule.require.bind(cardModule);
cardModule.require = name => name === '@/lib/projects' ? catalog.exports : originalRequire(name);
cardModule._compile(ts.transpileModule(fs.readFileSync(cardFile, 'utf8'), {
 compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
}).outputText, cardFile);
const { renderToStaticMarkup } = cardModule.require('react-dom/server');
const { createElement } = cardModule.require('react');
const renderCard = project => renderToStaticMarkup(createElement(cardModule.exports.default, { project }));

test('cards expose all achievements and direct repository actions without detail-page links', () => {
 for (const project of projects) {
  const html = renderCard(project);
  assert.ok(html.includes(`href="${githubUrl(project)}"`));
  assert.ok(!html.includes('href="/projects/'));
  assert.ok(!/case study/i.test(html));
  assert.equal((html.match(/<li>/g) || []).length, project.achievements.length);
  assert.equal(html.includes('Live demo'), Boolean(project.liveDemoUrl));
  if (project.liveDemoUrl) assert.ok(html.includes(`href="${project.liveDemoUrl}"`));
 }
});
test('unavailable external actions are omitted and provided demo URLs are used directly', () => {
 const noLinks = { ...projects[0], repo: undefined, liveDemoUrl: undefined };
 assert.equal(githubUrl(noLinks), undefined);
 assert.ok(!renderCard(noLinks).includes('<a '));
 const demoFixture = { ...noLinks, liveDemoUrl: 'https://example.org/demo' };
 const html = renderCard(demoFixture);
 assert.ok(html.includes('href="https://example.org/demo"'));
 assert.ok(html.includes('Live demo'));
});
