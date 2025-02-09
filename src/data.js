//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiMail,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { AiOutlineTeam } from 'react-icons/ai'

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/TypeScript.png';
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/XD.png';
import SkillImg6 from './assets/img/skills/Tailwind.png';

// testimonial images
import ZibaAkbari from './assets/img/testimonials/Ziba Akbari.svg.png';
import NiushaSangsefidi from './assets/img/testimonials/Niusha Sangsefidi.jfif';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  // {
  //   name: 'portfolio',
  //   href: 'portfolio',
  // },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/amirhosein-moqaddasi/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Moqaddasi',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/Ah_moqaddasi',
  },

];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'project name 1',
    category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'web development',
  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'branding',
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },

];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I value simple content structure, clean design patterns, and thoughtful interactions.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I’m comfortable working with different Front-end Development related technologies; JavaScript,React, Redux,HTML,CSS,TailWind,Sass,Scss, BootStrap,webPack, gitHub, XD, Texture or any other Tools for develope Front-end.',
  },
  {
    icon: <AiOutlineTeam />,
    name: 'Team Work',
    description:
      `I've also worked in agile teams and know about teamwork.This means I have mastery of collaboration.`,
  },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: ZibaAkbari,
    authorText:
      'He has a flexible personality and almost high emotional intelligence, so it is easy to interaction with him at work. He is eager to learn and do challenges. He loves his job and tries to develop with the most qualified syntax.',
    authorName: 'Ziba Akbari',
    authorPosition: 'FrontEnd web developer, Chargoon',
  },
  {
    authorImg: NiushaSangsefidi,
    authorText:
      `Amir's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.`,
    authorName: 'Niusha Sangsefidi',
    authorPosition: 'FrontEnd web developer, Chargoon',
  },
  // {
  //   authorImg: TestiImage3,
  //   authorText:
  //     'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //   authorName: 'Olivia Doe',
  //   authorPosition: 'Head of Design, Google',
  // },
  // {
  //   authorImg: TestiImage3,
  //   authorText:
  //     'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
  //   authorName: 'Olivia Doe',
  //   authorPosition: 'Head of Design, Google',
  // },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at ah.moqaddasi@gmail.com',
  },
  // {
  //   icon: <FiMapPin />,
  //   title: 'Current Location',
  //   subtitle: 'Bucharest, Romania',
  //   description: 'Serving clients worldwide',
  // },
];
