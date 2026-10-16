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
test('catalog has exactly nine unique case studies and the requested four featured projects', () => {
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
test('every case study has complete content, valid slugs, and a repository URL', () => {
 for (const project of projects) {
  assert.match(project.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.equal(new URL(githubUrl(project)).hostname, 'github.com');
  assert.ok(project.stack.length && project.architecture.length && project.contributions.length && project.results.length);
  assert.ok(project.problem && project.decisions && project.metric);
 }
});
test('inference benchmark preserves its measurement boundary and scheduler its trade-off', () => {
 assert.match(projects[0].metricNote, /not end-to-end/);
 assert.match(projects[3].challenge, /lower throughput/);
});
