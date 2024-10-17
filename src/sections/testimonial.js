/** @jsx jsx */
import { jsx, Container, Heading, Text, Box, Image } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Rating from 'components/rating';
import ButtonGroup from 'components/button-group';
import Carousel from 'react-multi-carousel';

import Avatar1 from 'assets/testimonial/taylor_testimonial.png';
import Avatar2 from 'assets/testimonial/john_testimonial.png';
import Avatar3 from 'assets/testimonial/avatar3.png';
import Avatar4 from 'assets/testimonial/marijn_testimonial.png';
import Avatar5 from 'assets/testimonial/caleb_testimonial.png';


const data = [
  {
    id: 1,
    title: 'Small team, huge results!',
    description:
      'These are exceptional developers. They went above and beyond in every category imaginable, and I say this having worked at Apple for 3+ years. They are comparable to the best engineers I\'ve had the pleasure of working with.',
    avatar: Avatar1,
    name: 'Taylor A',
    designation: 'Finmix',
    review: 5,
  },
  {
    id: 2,
    title: 'So fast!',
    description:
      'Many thanks for the quick turnaround on my React/TypeScripe project! The application is exactly what I am looking for. Looking forward to working with you again.',
    avatar: Avatar2,
    name: 'John F',
    designation: 'Top Games',
    review: 5,
  },
  {
    id: 3,
    title: 'Converted our Figma prototype to web application',
    description:
      'Working with RU was easy! They quickly understood the concept of the app and delivered a first version. We only had few things to fix before the App was ready. The team is very good at communication and understanding the workflow of the app, besides being technically very good with Vue, and converting from Figma to html/css/vue.',
    avatar: Avatar3,
    name: 'Ayman E',
    designation: 'LENOIR',
    review: 5,
  },
  {
    id: 4,
    title: 'Google Data Studio pros',
    description:
      'You all did exactly do what I hoped to achieve. Where one Upworker did not manage to complete the project, I was afraid it might have been an impossible exercise but RU delivered nonetheless!',
    avatar: Avatar4,
    name: 'Marijn V',
    designation: 'AIHR',
    review: 5,
  },
  {
    id: 5,
    title: 'Bootstrap Wizards!',
    description:
      'RU was a pleasure to work with as it was obvious they knew what they were doing, and had several options at their disposal to ensure the project went smoothly. I look forward to my next issue because I know who to message.',
    avatar: Avatar5,
    name: 'Caleb M',
    designation: 'SDVO',
    review: 5,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function TestimonialCard() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial'}}>
      <Container css={{ textAlign: 'center'}}>
        <SectionHeader 
          slogan="Testimonial"
          title="People Think We're Neat"
        />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel {...carouselParams}>
          {data.map((item) => (
            <Box sx={styles.reviewCard} key={item.sliderClass}>
              <Rating rating={item.review} />
              <Heading as='h3' sx={styles.title}>
                {item.title}
              </Heading>
              <Text sx={styles.description}>{item.description}</Text>
              <div className="card-footer">
                <div className="image">
                  <Image src={item.avatar} alt="Our Happy Clients!" />
                </div>
                <div className="reviewer-info">
                  <Heading as="h4" sx={styles.heading}>
                    {item.name}
                  </Heading>
                  <Text sx={styles.designation}>
                    {item.designation}
                  </Text>
                </div>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
};
