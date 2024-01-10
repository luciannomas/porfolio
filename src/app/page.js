//components
import Front from './ui/Front/page';
import Colors from './ui/Colors/page';
import MediaCard from './ui/Card/page';
import Layout from './ui/Layout/page';
import Title from './ui/Title/page';
import Pricing from './ui/Pricing/page';

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