import Process1 from '../../assets/image/saasModern/process-1.svg';
import Process2 from '../../assets/image/saasModern/process-2.svg';
import Process3 from '../../assets/image/saasModern/process-3.svg';

import FeatureIcon1 from '../../assets/image/saasModern/icon-1.png';
import FeatureIcon2 from '../../assets/image/saasModern/icon-2.png';
import FeatureIcon3 from '../../assets/image/saasModern/icon-3.png';
import FeatureIcon4 from '../../assets/image/saasModern/icon-4.png';
import FeatureIcon5 from '../../assets/image/saasModern/icon-5.png';
import FeatureIcon6 from '../../assets/image/saasModern/icon-6.png';

import Screenshot1 from '../../assets/image/saasModern/dash-3.png';
import Screenshot2 from '../../assets/image/saasModern/dash-4.png';

import AuthorOne from '../../assets/image/saasModern/author-1.jpg';
import AuthorTwo from '../../assets/image/saasModern/author-2.jpg';
import AuthorThree from '../../assets/image/saasModern/author-3.jpg';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Feature',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '0',
  },
  // {
  //   label: 'Testimonial',
  //   path: '#testimonial_section',
  //   offset: '0',
  // },
  {
    label: 'FAQ',
    path: '#faq_section',
    offset: '0',
  },
];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: 'Download our app',
    description:
      'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.',
  },
  {
    image: Process2,
    title: 'Create a free account',
    description:
      'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.',
  },
  {
    image: Process3,
    title: 'Now Start your journey',
    description:
      'Get your blood tests delivered at home collect a sample from the news Get your blood tests delivered with terms.',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];



export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 5 days a week and we offer 2 ways to get in contact.Email and Phone . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'Will it still work if the person being screened is wearing a face mask?',
    description:
      'Yes, It will still recognize the persons face while they are wearing a face mask. The unit also has an option to allow or deny a person from access weather they have a facemask or not. ',
  },
  {
    title: 'Can it also work as a face recognition device?',
    description:
      'Yes and it does a good job at doing so. it features both temperature screening and face recognition with dedicated cameras and sensors for each function.',
  },
  {
    title: 'Does it need to be connected to the internet / be online to work?',
    description:
      'No, it is designed to work as a standalone device, it only needs to be connected to a computer if you want to use our Smart Pass Management Software to allow you to connect multiple devices to a central dashboard. As well as live monitoring.',
  },
  {
    title: 'Can I connect it to my automated access door?',
    description:
      'Yes, the VPR Verified device features all the necessary ports to connect it to alarm systems and automated doors to control them.',
  },
  {
    title: 'Can I watch the screening from my own computer?',
    description:
      'Yes, it can be connected using our Smart Pass Software an office network to provide a live video feed while also showing the thermal and visual comparative results.',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'App Development',
    description:
      'Advanced intuitive software that allows you to connect multiple devices to a central computer or use it as a stand-alone device.',
  },
  {
    icon: FeatureIcon2,
    title: 'Access Control',
    description:
      'Can be connected with a wide range of access control devices such as power doors, turnstiles, 485, I/O input and output, etc..',
  },
  {
    icon: FeatureIcon3,
    title: 'Database Storage',
    description:
      'Database of 10,000 faces, 100,000 local capture and recognition records using deep learning algorithm.',
  },
  {
    icon: FeatureIcon4,
    title: 'Easy To Use',
    description:
      'Easy to install. Plug and play with stand alone unit or use a network of devices with our software.',
  },
  {
    icon: FeatureIcon5,
    title: 'Accurate Detections',
    description:
      'Uses advanced infrared temperature and face detection technology of living people to prevent photo or video spoofing.',
  },
  {
    icon: FeatureIcon6,
    title: 'Customer Support',
    description:
      'Around the clock caring customer support and installation support.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Budget Overview',
    image: Screenshot2,
  },
  {
    icon: ic_settings,
    title: 'Create & Adjust',
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: 'View Reports',
    image: Screenshot2,
  },
  {
    icon: briefcase,
    title: 'Integrations',
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: `${AuthorOne}`,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: `${AuthorTwo}`,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: `${AuthorThree}`,
  },
];
