import React from 'react';
import Layout from '../components/Layout';
import HeroCaseStudy from '../components/heros/HeroCaseStudy';
import AboutCaseStudy from '../components/AboutCaseStudy';
import StatsCaseStudy from '../components/StatsCaseStudy';
import FeaturesAlternatingCaseStudy from '../components/features/FeaturesAlternatingCaseStudy';
import CTA from '../components/cta';

const CaseStudy = () => (
  <Layout>
    {/* <!-- Hero --> */}
    <HeroCaseStudy />

    {/* <!-- About --> */}
    <AboutCaseStudy />

    {/* <!-- Key stats --> */}
    <StatsCaseStudy />

    {/* <!-- Features --> */}
    <FeaturesAlternatingCaseStudy />

    {/* <!-- CTA --> */}
    <CTA />
  </Layout>
);

export default CaseStudy;
