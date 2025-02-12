import React, { useState, useEffect } from 'react';
import CourseData from '../../../data/course/CourseData.json';
import CourseTypeOne from '../home02/CourseTypeOne';


const CourseTypeFilter = ( { itemToShow} ) => {

    const FilterControls = [...new Set( CourseData.map( item => item.filterParam ) ) ];
    FilterControls.unshift( 'All' );
    
    const numberOfCourses = itemToShow || 8;
    const [dataVisibleCount] = useState( numberOfCourses );

    const [activeFilter, setActiveFilter] = useState( '' );
    const [visibleItems, setVisibleItems] = useState( [] );
    useEffect( () => {
        setActiveFilter( FilterControls[0].toLowerCase() );
        setVisibleItems( CourseData.filter( ( item ) => item.id <= dataVisibleCount ) );
    }, [] );

    const handleChange = ( e ) => {
        e.preventDefault();
        setActiveFilter( e.target.textContent.toLowerCase() );
        let tempData;
        if ( e.target.textContent.toLowerCase() === FilterControls[0].toLowerCase() ) {
            tempData = CourseData.filter( ( data ) => data.id <= dataVisibleCount );
        } else {
            tempData = CourseData.filter( ( data ) => data.filterParam.toLowerCase() === e.target.textContent.toLowerCase() &&
            data.id <= dataVisibleCount );
        }
        setVisibleItems( tempData );
    }


    return (
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="heading text-center mb-40">
                            <span className="subheading">News and Achievements</span>
                            <h2 className="font-lg">Explore popular courses</h2>
                        </div>
                        <div className="course-filter button-group isotop-filter filters-button-group d-flex justify-content-center">
                            {FilterControls.map( ( filter, i ) => (
                                <button
                                    onClick={handleChange}
                                    key={i}
                                    className={
                                        filter.toLowerCase() === activeFilter
                                        ? "is-checked"
                                        : " "
                                    }
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        visibleItems.map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={ item.id }>
                                <CourseTypeOne data={item} />
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}

export default CourseTypeFilter;