/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import WCC_logo_V3_small from 'assets/WCC_logo_V3_small.png';

export default function Logo({ src, ...rest }) {
  return (
    <Link 
      path='/'
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        width: ['100%', '50%', '25%'],
      }}
      {...rest}
    >
      <Image src={WCC_logo_V3_small} alt='Reco creatives logo' />
    </Link>
  );
}
