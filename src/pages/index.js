import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Home from '../components/Home';

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Personal blog by Oyefeso Oluwatunmise"
        description="Personal blog by Oyefeso Oluwatunmise"
        slug=""
      />
      <Home />
    </Layout>
  );
};

export default Index;
