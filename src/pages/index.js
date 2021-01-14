import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Home from '../components/Home';
import About from '../components/About';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Personal blog by Oyefeso Oluwatunmise"
        description="Personal blog by Oyefeso Oluwatunmise"
        slug=""
      />
      <About />
    </Layout>
  );
};

export default Index;
