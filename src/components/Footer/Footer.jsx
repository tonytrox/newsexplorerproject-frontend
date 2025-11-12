import './footer.css';
import githubLogo from '../../assets/githubLogo.svg';
import facebookLogo from '../../assets/facebookLogo.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Supersite, Powered by News API
        </p>
        <nav className="footer__links-wrapper">
          <ul className="footer__nav">
            <li>
              <a href="#" className="footer__nav-item" target="_blank">
                Inicio
              </a>
            </li>
            <li>
              <a href="https://tripleten.com/" className="footer__nav-item" target="_blank">
                TripleTen
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li className="footer__social-item">
              <a href="https://github.com/" className="footer__social-icon" target="_blank">
                <img src={githubLogo} alt="GitHub Logo" className="footer__social-icon" />
              </a>
            </li>
            <li className="footer__social-item">
              <a href="https://www.facebook.com/" className="footer__social-icon" target="_blank">
                <img src={facebookLogo} alt="Facebook Logo" className="footer__social-icon" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
