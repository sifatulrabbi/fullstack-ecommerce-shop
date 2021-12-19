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
      <div className='flex-center'>
        <NavMenu active={activeMenu}>
          <li>
            <SearchBar>
              <input
                className='search-input'
                type='text'
                placeholder={'search...'}
                maxLength={100}
              />
              <button className='search-button' onClick={() => toggleMenu(false)}>
                <FaSearch />
              </button>
            </SearchBar>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link to='/'>Categories</Link>
          </li>
          <li onClick={() => toggleMenu(false)}>
            <Link to='/'>Offers</Link>
          </li>
          <li>
            <Link to='/login'>
              <Button onClick={() => toggleMenu(false)}>Login</Button>
            </Link>
          </li>
        </NavMenu>
        <button className='menu-btn' onClick={() => toggleMenu()}>
          {!activeMenu ? <FaBars /> : <FaTimes />}
        </button>
        <Link to='/cart'>
          <button className='cart-btn'>
            <FaShoppingCart />
          </button>
        </Link>
      </div>
    </Wrapper>
  );
}
