/** @jsx jsx */
import { jsx, Container, Flex, Button, NavLink } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';

export default function Header({ className }) {
  return (
    //sx is just the styles declaration in theme-ui
      <header sx={styles.header} className={className} id="header"> 
        <Container sx={styles.container}>
          <Logo src={LogoDark} />
          <Flex as='nav' sx={styles.nav}>
            {menuItems.map((menuItem, i) => (
              <Link 
                activeClass='active'
                to={menuItem.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {menuItem.label}
              </Link>
            ))}
          </Flex>
          <NavLink href='https://www.upwork.com/fl/~013d0e4b4b7e23859a?' target='_blank'>
          {/* <Button 
            className="donate__btn" 
            variant='secondary' 
            aria-label='Get Started'
            >
              Get Started
          </Button>
           */}
          </NavLink>
          <MobileDrawer />
        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
