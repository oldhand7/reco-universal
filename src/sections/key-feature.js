/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'In today\'s business world, there are no days off. That\'s why we lock our code monkeys in cages. Humane cages.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership Deals',
    title: 'Partnership Deals',
    text:
      'Become a RU partner and gain access to the code monkey cages. You can feed them amphetamines for faster project completion',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Top Developers',
    title: 'Top Developers',
    text:
      'Decades of experience and performance available to help make your ideas a reality',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'The monkeys never leave their cages and are waiting for your call 24 hours a day',
  },
];

//this is that section right under our first big pic. function located in section-header.js
export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature' }} id='feature'>
    <Container>
      <SectionHeader
        slogan="we fly higher, together"
        title="Checkout Our Services"
      />

      <Grid sx={styles.grid}>
        {data.map((item) => (
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
      </Grid>
    </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
