import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header__title">Wei-Han Chen</h1>
      <nav className="header__nav">
        <a href="/" className="header__link">
          Home
        </a>
        <a href="/about" className="header__link">
          About
        </a>
        <a href="/projects" className="header__link">
          Projects
        </a>
        <a href="/contact" className="header__link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
