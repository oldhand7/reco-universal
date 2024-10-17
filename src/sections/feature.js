/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Aim High',
    title: 'Aim High',
    text:
      'We strive to help companies across industries create optimal digital environments aligned with their technical capacity, business requirements, employees’ needs, and customers’ expectations.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Necessity',
    title: 'Necessity',
    text:
      'WCC\'s software consultants assist our customers in selecting the right technology stacks for their solutions. Be it a programming language or a ready-to-use platform, we help businesses review technologies’ pros and cons before starting their projects.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Experience',
    title: 'Experience',
    text:
      'With a combined 20+ years of software development experience, Reco Creative\'s code minions are are cut above the rest. We have seen it all, and are ready to put that knowledge to use on your projects.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'We offer 24/7 support, ensuring your application will always have developers on hand to fix situations that may arise.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature'}}>
      <Container>
        <SectionHeader
          slogan="Quality Features"
          title="Knowledge & experience helps get the job done."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
