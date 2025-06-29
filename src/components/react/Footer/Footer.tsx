import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer__text">© 2023 Wei-Han Chen. All rights reserved.</p>
      <nav className="footer__nav">
        <a href="/privacy" className="footer__link">
          Privacy Policy
        </a>
        <a href="/terms" className="footer__link">
          Terms of Service
        </a>
        <a
          href="https://github.com/weihanchen0725"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/weihanchen0725"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:your.email@example.com" className="footer__link">
          Email
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
