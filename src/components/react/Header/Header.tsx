import { useEffect, useState, useCallback, useMemo } from 'react';
import './Header.scss';

// Type definitions for better TypeScript support
interface NavItem {
  href: string;
  label: string;
  ariaLabel?: string;
}

const Header: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Memoize navigation items to prevent unnecessary re-renders
  const navItems: NavItem[] = useMemo(() => [
    { href: '/', label: 'Home', ariaLabel: 'Go to homepage' },
    { href: '/about', label: 'About', ariaLabel: 'Learn about Wei-Han Chen' },
    { href: '/projects', label: 'Projects', ariaLabel: 'View portfolio projects' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Get in touch' }
  ], []);

  // Memoize the active link checker to prevent unnecessary recalculations
  const isActiveLink = useCallback((href: string): boolean => {
    // Don't show active state until hydrated to prevent mismatch
    if (!isHydrated) return false;
    
    // Normalize paths for comparison
    const normalizedCurrent = currentPath.replace(/\/+$/, '') || '/';
    const normalizedHref = href.replace(/\/+$/, '') || '/';
    
    if (normalizedHref === '/') {
      // Home page - exact match only
      return normalizedCurrent === '/' || normalizedCurrent === '' || normalizedCurrent === '/index';
    }
    
    // For other pages, check if current path starts with the href
    return normalizedCurrent === normalizedHref || normalizedCurrent.startsWith(normalizedHref + '/');
  }, [currentPath, isHydrated]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 10;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
    }
  }, [isScrolled]);

  // Throttle scroll events for better performance
  const throttledScrollHandler = useMemo(() => {
    let ticking = false;
    return () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
  }, [handleScroll]);

  // Track current page - handle hydration properly
  useEffect(() => {
    // Set the path and mark as hydrated
    const pathname = window.location.pathname;
    setCurrentPath(pathname);
    setIsHydrated(true);
  }, []); // Run only once on mount

  // Track scroll with throttling for better performance
  useEffect(() => {
    // Set initial scroll state
    setIsScrolled(window.scrollY > 10);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [throttledScrollHandler]);

  // Handle navigation click - simplified for Astro
  const handleNavClick = useCallback((href: string) => {
    // Update state immediately for visual feedback
    setCurrentPath(href);
  }, []);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <h1 className="header__title">
        <a 
          href="/" 
          className="header__title-link"
          aria-label="Wei-Han Chen - Go to homepage"
        >
          Wei-Han Chen
        </a>
      </h1>
      <nav className="header__nav" role="navigation" aria-label="Main navigation">
        {navItems.map(({ href, label, ariaLabel }) => (
          <a
            key={href}
            href={href}
            className={`header__link ${isActiveLink(href) ? 'active' : ''}`}
            aria-label={ariaLabel}
            aria-current={isActiveLink(href) ? 'page' : undefined}
            onClick={() => handleNavClick(href)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
