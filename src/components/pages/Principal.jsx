import React from 'react';
import { About } from '../layouts/home02';

import Layout from '../../common/Layout';

const Principal = () => {
  return (
    <>
    <Layout>
    <div className="container my-5">
            <About/>
        </div>
      </Layout>
    </>
  );
};

export default Principal;
