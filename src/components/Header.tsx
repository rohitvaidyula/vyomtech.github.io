import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-muted/10">
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo.png" 
            alt="VyomTech" 
            className="h-10 w-auto group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `font-body font-medium transition-colors ${
                  isActive ? 'text-primary font-semibold' : 'text-muted hover:text-accent'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-muted/10 bg-bg">
          <div className="container-wide py-6 space-y-4">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-body font-medium transition-colors ${
                    isActive ? 'text-primary font-semibold' : 'text-muted hover:text-accent'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full mt-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
