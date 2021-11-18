import { ReactElement, useEffect, useState } from 'react';
import { Wrapper, SearchBar, NavMenu } from './navbar.styles';
import { detectScrollDown } from '../../utils';
import Logo from '../logo/logo';

function Navbar(): ReactElement {
  const [shrink, setShrink] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShrink(detectScrollDown(document.documentElement.scrollTop));
    });
  }, []);

  return (
    <Wrapper className='container-padding' shrink={shrink}>
      <Logo secondary={!shrink} />
      <SearchBar></SearchBar>
      <NavMenu>
        <li>
          <button></button>
        </li>
      </NavMenu>
    </Wrapper>
  );
}

export default Navbar;
