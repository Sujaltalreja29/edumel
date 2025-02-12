import React, { useState, useMemo } from 'react';
import CourseType from '../course02/CourseType';
import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from '../../../data/course/data.js';

const CourseGrid = ({ page }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const schoolData = [
        { category: "Curricular", data: activityData },
        { category: "School", data: schoolActivities },
        { category: "Achievements", data: achievements },
        { category: "Olympiad", data: olympiad },
        { category: "Community", data: communityService },
        { category: "Sports", data: sports },
        { category: "CBSE", data: cbseActivities },
    ];

    const curr_data = schoolData.filter((item) => item.category === page);
    const allCourseItems = curr_data[0].data;
    console.log(allCourseItems);
    const filteredCourseItems = useMemo(() => {
        if (!searchQuery.trim()) {
            return allCourseItems.slice(0, 8);
        }

        return allCourseItems.filter(item => 
            item.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 8);
    }, [allCourseItems, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        // The search is already live, but we'll prevent form submission
    };

    return (
        <section className="section-padding page">
            <div className="course-top-wrap mb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <p>
                                Showing {filteredCourseItems.length} of {allCourseItems.length} results
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="topbar-search">
                                <form method="get" action="#" onSubmit={handleSearch}>
                                    <input 
                                        type="text" 
                                        placeholder="Search by title" 
                                        className="form-control"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <label><i className="fa fa-search"></i></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {filteredCourseItems.length > 0 ? (
                        filteredCourseItems.map((item) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                <CourseType data={item} />
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="mt-4">No results found for ID: {searchQuery}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;