import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cornerstone Innovations</h3>
            <p className="text-gray-400">
              Empowering rural Ghana through financial inclusion, agriculture,
              and connectivity.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/CStoneInnovations" className="text-green-600 hover:text-white">
                <Facebook size={25} />
              </a>
              <a href="https://www.instagram.com/cornerstone_innovations" className="text-green-600 hover:text-white">
                <Instagram size={25} />
              </a>
              <a href="https://x.com/CStoneInnovate" className="text-green-600 hover:text-white">
                <FaXTwitter  size={25} />
              </a>
              <a href="https://www.tiktok.com/@cornerstone_innovations" className="text-green-600 hover:text-white">
                <FaTiktok size={25} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-400 hover:text-white">
                  Impact
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services#mfs"
                  className="text-gray-400 hover:text-white"
                >
                  Mobile Financial Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services#livestock"
                  className="text-gray-400 hover:text-white"
                >
                  Livestock Supply
                </Link>
              </li>
              <li>
                <Link
                  to="/services#telecom"
                  className="text-gray-400 hover:text-white"
                >
                  Telecommunications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>Kpong, Ghana</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:+233249594345" className="hover:text-white">
                  0249594345
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:+233277594345" className="hover:text-white">
                  0277594345
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <a href="tel:+233504594345" className="hover:text-white">
                  0504594345
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <a
                  href="mailto:cstoneinnovation20@gmail.com"
                  className="hover:text-white"
                >
                  cstoneinnovation20@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Cornerstone Innovations. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
