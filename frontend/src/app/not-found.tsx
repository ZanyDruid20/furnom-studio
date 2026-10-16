import Link from 'next/link';
export default function NotFound() { return <main id="main" className="shell page-main empty"><p className="eyebrow">404 / NOT FOUND</p><h1>This page is not here.</h1><p className="muted">Explore the project archive to explore the engineering projects.</p><Link className="button primary" href="/projects">Back to projects</Link></main>; }
