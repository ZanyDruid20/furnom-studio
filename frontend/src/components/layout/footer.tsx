export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 Furnom Dam. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ZanyDruid20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/furnom-dam/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:furnomd1@umbc.edu"
              className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}