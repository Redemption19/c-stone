import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@assets/images/logo-cstone.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Impact', href: '/impact' },
    { name: 'Segments', href: '/segments' },
    { name: 'Partners', href: '/partners' },
    // // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
                 {/* Logo instead of text */}
                 <img
                src={logo}
                alt="Cornerstone Innovations Logo"
                className="h-10" // Adjust the size as necessary
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-green-700 font-semibold'
                    : 'text-gray-600 hover:text-green-700'
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+233249594345"
              className="bg-green-700 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-green-800 transition-colors duration-200"
            >
              <Phone size={18} />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-green-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'text-green-700 font-semibold'
                      : 'text-gray-600'
                  } block px-3 py-2 rounded-md text-base hover:bg-gray-50`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+233249594345"
                className="block px-3 py-2 text-base text-green-700 font-medium hover:bg-gray-50"
              >
                <div className="flex items-center space-x-2">
                  <Phone size={18} />
                  <span>Call Us</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;