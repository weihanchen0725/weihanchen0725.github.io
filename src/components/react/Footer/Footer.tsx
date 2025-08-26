import './Footer.scss';

// Type definitions for social links
interface SocialLink {
  href: string;
  label: string;
  ariaLabel: string;
  external?: boolean;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    {
      href: "https://github.com/weihanchen0725",
      label: "GitHub",
      ariaLabel: "Visit Wei-Han Chen's GitHub profile",
      external: true
    },
    {
      href: "https://www.linkedin.com/in/weihanchen0725",
      label: "LinkedIn",
      ariaLabel: "Connect with Wei-Han Chen on LinkedIn",
      external: true
    },
    {
      href: "mailto:weihanchen0725@gmail.com",
      label: "Email",
      ariaLabel: "Send an email to Wei-Han Chen"
    }
  ];

  const legalLinks: SocialLink[] = [
    {
      href: "/privacy",
      label: "Privacy Policy",
      ariaLabel: "View privacy policy"
    },
    {
      href: "/terms",
      label: "Terms of Service",
      ariaLabel: "View terms of service"
    }
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__brand">
            <h2 className="footer__title">Wei-Han Chen</h2>
            <p className="footer__tagline">
              Building innovative solutions with passion and precision
            </p>
          </div>
          
          <div className="footer__links">
            <div className="footer__section">
              <h3 className="footer__section-title">Connect</h3>
              <nav className="footer__nav" aria-label="Social media links">
                {socialLinks.map(({ href, label, ariaLabel, external }) => (
                  <a
                    key={href}
                    href={href}
                    className="footer__link footer__link--social"
                    aria-label={ariaLabel}
                    {...(external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="footer__section">
              <h3 className="footer__section-title">Legal</h3>
              <nav className="footer__nav" aria-label="Legal links">
                {legalLinks.map(({ href, label, ariaLabel }) => (
                  <a
                    key={href}
                    href={href}
                    className="footer__link footer__link--legal"
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Wei-Han Chen. All rights reserved.
          </p>
          <p className="footer__credits">
            Built with <span className="footer__heart">♥</span> using Astro & React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
