import React from 'react';
import { About } from '../layouts/home02';

import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/course02/index';

const Principal = () => {
  return (
    <>
    <Layout>
    <PageBanner
                        title="Principal message"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="message"
                        />
    <div className="container my-5">
            <About/>
        </div>
      </Layout>
    </>
  );
};

export default Principal;
