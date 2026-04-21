export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/70 px-6 py-8 backdrop-blur">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-500">© 2026 Furnom Dam. Built with Next.js and Vercel.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ZanyDruid20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/furnom-dam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:furnomd1@umbc.edu"
              className="text-sm text-slate-500 transition-colors hover:text-slate-950"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}