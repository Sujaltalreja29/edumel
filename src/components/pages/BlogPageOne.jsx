import React from 'react';
import { PageBanner , PostGridOne  }  from '../layouts/blog/index';

import Layout from '../../common/Layout';
import PostData from '../../data/blog/PostData.json';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import TagOne from '../../components/widgets/blog/TagOne';


const BlogPageOne = () => {
    return (
        <div className="about">       
            <Layout>       
                    <PageBanner
                        title="Blog Grid"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Blog Grid"
                        />

                    <div class="page-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-8 col-xl-8">
                                    <div class="row">
                                    { 
                                        PostData.slice( 0, 8 ).map((item) => (
                                            <div className="col-lg-6 col-md-6 col-12" key={ item.id }>
                                                <PostGridOne data={item} />
                                            </div>
                                        ) )
                                    }
                                    </div>
                                    
                                    <nav class="blog-page-navigation">
                                        <ul class="pagination">
                                            <li class="pagination-arrow"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                                            <li><a href="#">1</a></li>
                                            <li><a class="active" href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li class="pagination-arrow"><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div class="col-lg-4 col-xl-4">

                                    <div className="blog-sidebar mt-mt-lg-0">
                                        <SearchOne />
                                        <LatestPostOne extraClass="mt--40" />
                                        <CategoryOne extraClass="mt--40" />
                                        <TagOne extraClass="mt--40" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               
            </Layout>
        </div>
    );
}

export default BlogPageOne;