import React from 'react';
import { PageBanner,Counter, AboutComp,Features,Team,Review}  from '../layouts/about/index';
import Layout from '../../common/Layout';


const AboutMain = () => {
    return (
        <div className="about">       
            <Layout>       
                    <PageBanner
                        title="About us"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="About"
                        />
                    <Features />
                    <Team />
                    <Counter />
                    <AboutComp />
                    <Review />
            </Layout>
        </div>
    );
}

export default AboutMain;