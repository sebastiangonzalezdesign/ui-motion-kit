import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  CubeIcon,
  MapIcon,
  ChatBubbleBottomCenterTextIcon,
  PlayIcon,
  SparklesIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import SearchInput from '../../primitives/SearchInput/SearchInput';
import './Navbar.scss';

export interface NavbarItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: NavbarItem[];
}

export interface NavbarProps {
  brand?: {
    name: string;
    logo?: React.ReactNode;
    path?: string;
  };
  items?: NavbarItem[];
  variant?: 'default' | 'transparent' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  showSearch?: boolean;
  showUserMenu?: boolean;
  showMobileMenu?: boolean;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  brand = { name: 'Motion UI Kit', path: '/' },
  items = [],
  variant = 'default',
  size = 'md',
  showSearch = false,
  showUserMenu = false,
  showMobileMenu = false,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (itemId: string) => {
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  const defaultItems: NavbarItem[] = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: <HomeIcon className="navbar-item-icon" />,
    },
    {
      id: 'components',
      label: 'Components',
      path: '/docs/components',
      icon: <CubeIcon className="navbar-item-icon" />,
      children: [
        {
          id: 'ui-basics',
          label: 'UI Basics',
          path: '/docs/components?category=ui-basics',
          icon: <MapIcon className="navbar-item-icon" />,
        },
        {
          id: 'navigation',
          label: 'Navigation',
          path: '/docs/components?category=navigation',
          icon: <MapIcon className="navbar-item-icon" />,
        },
        {
          id: 'feedback',
          label: 'Feedback',
          path: '/docs/components?category=feedback',
          icon: <ChatBubbleBottomCenterTextIcon className="navbar-item-icon" />,
        },
        {
          id: 'motion',
          label: 'Motion',
          path: '/docs/components?category=motion',
          icon: <PlayIcon className="navbar-item-icon" />,
        },
      ],
    },
    {
      id: 'examples',
      label: 'Examples',
      path: '/examples',
      icon: <SparklesIcon className="navbar-item-icon" />,
    },
  ];

  const navbarItems = items.length > 0 ? items : defaultItems;

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`navbar navbar--${variant} navbar--${size} ${showMobileMenu ? 'navbar--mobile-menu-mode' : ''} ${showMobileMenu && isMobileMenuOpen ? 'navbar--mobile-menu-open' : ''} ${className}`}
    >
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
          {brand.logo && <div className="navbar-logo">{brand.logo}</div>}
          {brand.path ? (
            <Link to={brand.path} className="navbar-brand-link">
              {brand.name}
            </Link>
          ) : (
            <span className="navbar-brand-text">{brand.name}</span>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <ul className="navbar-nav">
            {navbarItems.map((item) => (
              <li key={item.id} className="navbar-nav-item">
                {item.children ? (
                  <div className="navbar-dropdown">
                    <button
                      className={`navbar-nav-link ${activeDropdown === item.id ? 'active' : ''}`}
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.icon && item.icon}
                      <span>{item.label}</span>
                      <svg
                        className={`navbar-dropdown-arrow ${
                          activeDropdown === item.id ? 'rotated' : ''
                        }`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.id && (
                      <ul className="navbar-dropdown-menu">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              to={child.path}
                              className={`navbar-dropdown-item ${
                                isActivePath(child.path) ? 'active' : ''
                              }`}
                            >
                              {child.icon && child.icon}
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`navbar-nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {showSearch && (
            <div className="navbar-search">
              <SearchInput placeholder="Search" className="navbar-search-input-component" />
            </div>
          )}

          {showUserMenu && (
            <div className="navbar-user-menu">
              <button className="navbar-user-button" aria-label="User menu">
                <UserIcon className="navbar-user-icon" />
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          {showMobileMenu && (
            <button
              className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <span className="navbar-mobile-icon" aria-hidden="true"></span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-mobile-nav">
            {navbarItems.map((item) => (
              <li key={item.id} className="navbar-mobile-nav-item">
                {item.children ? (
                  <div className="navbar-mobile-dropdown">
                    <button
                      className="navbar-mobile-nav-link"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={activeDropdown === item.id}
                    >
                      {item.icon && item.icon}
                      <span>{item.label}</span>
                      <svg
                        className={`navbar-mobile-dropdown-arrow ${
                          activeDropdown === item.id ? 'rotated' : ''
                        }`}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.id && (
                      <ul className="navbar-mobile-dropdown-menu">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link to={child.path} className="navbar-mobile-dropdown-item">
                              {child.icon && child.icon}
                              <span>{child.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="navbar-mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon && item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
