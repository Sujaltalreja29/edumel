
import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const CBSE = (page) =>  {
    console.log(page)
    return (
        <div className="Curricular">       
            <Layout>    
                <PageBanner
                    title="CBSE"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="CBSE"
                    />
                <CourseGrid page="CBSE"/>
            </Layout>  
        </div>
    );
}
export default CBSE;