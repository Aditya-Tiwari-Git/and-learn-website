import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="AND Learn" className="h-8 w-auto mb-4" />
            <p className="text-gray-400">
              Making AI simple, accessible, and effective for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features">
                  <a className="text-gray-400 hover:text-white">Features</a>
                </Link>
              </li>
              <li>
                <Link href="#tools">
                  <a className="text-gray-400 hover:text-white">AI Tools</a>
                </Link>
              </li>
              <li>
                <Link href="#videos">
                  <a className="text-gray-400 hover:text-white">Productivity Hacks</a>
                </Link>
              </li>
              <li>
                <Link href="#blog">
                  <a className="text-gray-400 hover:text-white">Blog</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#integrations">
                  <a className="text-gray-400 hover:text-white">Integrations</a>
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Tutorials</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#contact">
                  <a className="text-gray-400 hover:text-white">Get in Touch</a>
                </Link>
              </li>
              <li>
                <a href="mailto:aditiw.work@gmail.com" className="text-gray-400 hover:text-white">
                  aditiw.work@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AND Learn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
