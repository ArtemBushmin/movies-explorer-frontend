import './Header.css';
import { Link } from 'react-router-dom';

function Header({ children, color, location }) {
  return (
    <header className={`header`}>
      <div className={`header__container ${location} ${color}`}>
        <Link to='/' className='header__logo'></Link>
        {children}
      </div>
    </header>
  );
}

  export default Header;
