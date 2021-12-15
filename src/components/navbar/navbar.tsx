import { ReactElement, useEffect, useState } from 'react';
import { Wrapper, SearchBar, NavMenu, Button } from './navbar.styles';
import Logo from '../logo/logo';
import { FaSearch } from 'react-icons/fa';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Navbar(): ReactElement {
  const [shrink, setShrink] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);

  function toggleMenu(val?: boolean): void {
    if (val) {
      setActiveMenu(val);
      return;
    }

    setActiveMenu((prev) => !prev);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShrink(document.documentElement.scrollTop > 100);
    });
  }, []);

  return (
    <Wrapper className='container-padding' shrink={shrink}>
      <Logo secondary={!shrink} />
      <NavMenu active={activeMenu}>
        <li>
          <SearchBar>
            <input
              className='search-input'
              type='text'
              placeholder={'search...'}
              maxLength={100}
            />
            <button className='search-button'>
              <FaSearch />
            </button>
          </SearchBar>
        </li>
        <li>
          <Link to='/'>Categories</Link>
        </li>
        <li>
          <Link to='/'>Offers</Link>
        </li>
        <li>
          <button className='cart-btn'>
            <FaShoppingCart />
          </button>
        </li>
        <li>
          <Button>
            <Link to='/'>Login</Link>
          </Button>
        </li>
      </NavMenu>
      <button className='menu-btn' onClick={() => toggleMenu()}>
        {!activeMenu ? <FaBars /> : <FaTimes />}
      </button>
    </Wrapper>
  );
}
