// components/navbar/MobileNavbar.jsx
import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/images/logo.png";

const MobileNavbar = ({
  isOpen,
  setIsOpen,
  navItems,
  scrolled,
  activeLink,
  handleNavClick,
}) => {
  const sidebarRef = useRef(null);

  // Close when pressing ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setIsOpen]);

  // Auto focus on sidebar when opened
  useEffect(() => {
    if (isOpen && sidebarRef.current) sidebarRef.current.focus();
  }, [isOpen]);

  const socialItems = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.25 } },
  };

  return (
    <>
      {/* Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:hidden transition-all duration-300 font-gothic ${
          scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white"
        }`}
        aria-label="Mobile Navigation"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              aria-label="Go to Home section"
              onClick={() => handleNavClick("#home", "home")}
              className="flex items-center"
            >
              <img src={logo} alt="Company Logo" className="h-8 w-auto" />
            </a>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-sidebar"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              id="mobile-sidebar"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Sidebar Navigation"
              ref={sidebarRef}
              tabIndex="-1"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 md:hidden flex flex-col outline-none font-gothic"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <a
                  href="#home"
                  onClick={() => handleNavClick("#home", "home")}
                  aria-label="Home"
                >
                  <img src={logo} alt="Company Logo" className="h-8 w-auto" />
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close sidebar menu"
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4" aria-label="Sidebar Navigation">
                <div className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeLink === item.id;

                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        role="link"
                        aria-label={`Navigate to ${item.name}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, item.id);
                          setIsOpen(false);
                        }}
                        className={`block px-4 py-3 rounded-full transition-all text-base font-gothic font-medium ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-[1.03]"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </nav>

              {/* Social Media */}
              <div className="p-4 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-600 mb-3">
                  Follow Us
                </p>
                <div className="flex space-x-3">
                  {socialItems.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        aria-label={`Visit our ${social.name} page`}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
