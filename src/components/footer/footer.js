/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import WCC_logo_V3_small from 'assets/WCC_logo_V3_smaller.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link>
            <Image sx={styles.img} src={WCC_logo_V3_small} alt="Reco Universal logo" />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map((item, i) => (
                <Link 
                  path={item.path}
                  key={i}
                  label={item.label}
                  sx={styles.footer.link}
                  target="_blank"
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            © {new Date().getFullYear()} Reco Universal, LLC.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {

  img: {
        width: ['50%', '15%'],
  },

  footer: {
    // img: { 
  
    //   display: 'flex',
    //   justifyContent: 'center',
    //   flexWrap: 'wrap',
    // },
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
