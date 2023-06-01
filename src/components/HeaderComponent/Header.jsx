import './Header.css'
import Logo from '../../assets/image/logo.png'
import {FaSearch, FaUserCircle} from 'react-icons/fa';
import {BsArrowDownCircle} from 'react-icons/bs';
function Header(){
    return (
        <header>
            <nav className='nav'>
                <a className='left-nav' href='/'>
                    <img className='Logo' src = {Logo} alt='logo-spotify' />
                    <a className='name-logo' href="/">Spotify</a>
                </a>
                <div className='search-header'>
                    <FaSearch className='search-icon'/>
                    <input className='search-input' type="text" placeholder='What do you want listen to?'/>
                </div>
                <div className='btn-header'>
                    <button className='upgrade-btn'>Upgrade</button>
                    <button className='install-btn' ><BsArrowDownCircle className='icon-install'/> Install App</button>
                    <FaUserCircle className='user-icon'/>
                </div>
            </nav>
        </header>
    )
}

export default Header;