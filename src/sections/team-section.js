/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaDumpsterFire, FaInstagram, FaLinkedin } from 'react-icons/fa';


import Member5 from '../assets/team/member-5.png';
import matt_pfp from '../assets/team/matt_pfp.png';
import eshan_pfp from '../assets/team/eshan_pfp.png';
import kris_pfp from '../assets/team/kris_pfp.png';
import tatsu_pfp from '../assets/team/tatsu_pfp.png';
import julio_pfp from '../assets/team/julio_pfp.png';
const data = [
  {
    id: 1,
    imgSrc: eshan_pfp,
    altText: 'Shawn Arnold',
    title: 'Shawn Arnold',
    designation: 'CEO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/shawn-arnold-21ab922ba/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 2,
    imgSrc: kris_pfp,
    altText: 'Abigayle Graham',
    title: 'Abigayle Graham',
    designation: 'Professional Recruiter',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/abigayle-graham-453598327/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 3,
    imgSrc: matt_pfp,
    altText: 'Elmer Littlefield',
    title: 'Elmer Littlefield',
    designation: 'CTO',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/elmer-littlefield-957139327/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 4,
    imgSrc: tatsu_pfp,
    altText: 'Alexandra Douglas',
    title: 'Alexandra Douglas',
    designation: 'HR Manager',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/alexandra-douglas-a60135327/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Remigio Flores ',
    title: 'Remigio Flores ',
    designation: 'Chief Operating Officer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/remigio-flores-136597327/',
        icon: <FaLinkedin />,
      }
    ],
  },
  {
    id: 6,
    imgSrc: julio_pfp,
    altText: 'Torian Clarke',
    title: 'Torian Clarke',
    designation: 'Chief Legal Officer',
    socialProfile: [
      {
        id: 1,
        name: 'linkedin',
        path: 'https://www.linkedin.com/in/torian-clarke-28b24a323/',
        icon: <FaLinkedin />,
      }
    ],
  },
];

// containers center everything
export default function TeamSection() {
  return (
    <section style={{marginTop: "50px"}}>
      <Container>
        <SectionHeader
        
          slogan="Meet Our Team"
          title="EPA Certified GMO Free"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard 
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}

        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
