import React from 'react';
import {PageBanner,TrainingGrid}  from '../layouts/instructors/index';

import Layout from '../../common/Layout';

const Training = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Training"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Training"
                    />
                <TrainingGrid />
            </Layout>  
        </div>
    );
}

export default Training;