"use client"
import { createTheme} from '@mui/material/styles';

//components
import Front from './ui/Front/page';
import Colors from './ui/Colors/page';
import MediaCard from './ui/Card/page';
import Layout from './ui/Layout/page';
import Title from './ui/Title/page';
import Pricing from './ui/Pricing/page';


const tiers = [
  {
    title: 'Static desing',
    price: '50',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro desing ',
    subheader: 'Most popular',
    price: '100',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined', //contained
  },
  {
    title: 'Enterprise',
    price: '500',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'outlined',
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  
  return (
    <Layout>
        <Front />
        <Title />
        <MediaCard/>
        <Colors />
        <Pricing />
    </Layout>
  );
}