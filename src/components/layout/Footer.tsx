import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/our-people" className="text-zinc-300 hover:text-white transition-colors">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/about/uam-gives" className="text-zinc-300 hover:text-white transition-colors">
                  UAM Gives
                </Link>
              </li>
              <li>
                <Link href="/about/our-history" className="text-zinc-300 hover:text-white transition-colors">
                  Our History
                </Link>
              </li>
              <li>
                <Link href="/about/dei" className="text-zinc-300 hover:text-white transition-colors">
                  Diversity, Equity, & Inclusion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/expertise/construction-management" className="text-zinc-300 hover:text-white transition-colors">
                  Construction Management
                </Link>
              </li>
              <li>
                <Link href="/expertise/general-contracting" className="text-zinc-300 hover:text-white transition-colors">
                  General Contracting
                </Link>
              </li>
              <li>
                <Link href="/expertise/preconstruction" className="text-zinc-300 hover:text-white transition-colors">
                  Preconstruction
                </Link>
              </li>
              <li>
                <Link href="/expertise/design-build" className="text-zinc-300 hover:text-white transition-colors">
                  Design Build
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-zinc-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-zinc-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-zinc-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-zinc-300">
                <strong>Los Angeles:</strong><br />
                15821 Ventura Blvd<br />
                Encino, CA 91436
              </li>
              <li className="text-zinc-300">
                <strong>Email:</strong> cavsChamps2016@gmail.com
              </li>
              <li className="text-zinc-300">
                <strong>Phone:</strong> (480) 823-1382
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-zinc-300 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} UAM Construction Management. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
