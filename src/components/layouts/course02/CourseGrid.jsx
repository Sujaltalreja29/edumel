import React, { useState, useMemo } from 'react';
import CourseType from '../course02/CourseType';
import { activityData, schoolActivities, achievements, sports, communityService, olympiad, cbseActivities } from '../../../data/course/data.js';

const CourseGrid = ({ page }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('default');

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
    const category = page;
    const sortOptions = [
        { value: 'default', label: 'Default Order' },
        { value: 'a-z', label: 'A to Z' },
        { value: 'z-a', label: 'Z to A' },
        { value: 'newest', label: 'Newest First' },
        { value: 'oldest', label: 'Oldest First' },
    ];

    const filteredAndSortedItems = useMemo(() => {
        // First, filter by search query
        let items = !searchQuery.trim()
            ? allCourseItems
            : allCourseItems.filter(item =>
                item.title.toString().toLowerCase().includes(searchQuery.toLowerCase())
            );

        // Then, sort the filtered items
        switch (sortOrder) {
            case 'a-z':
                items = [...items].sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'z-a':
                items = [...items].sort((a, b) => b.title.localeCompare(a.title));
                break;
            case 'newest':
                items = [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'oldest':
                items = [...items].sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            default:
                break;
        }

        return items.slice(0, 8);
    }, [allCourseItems, searchQuery, sortOrder]);

    const handleSearch = (e) => {
        e.preventDefault();
    };

    return (
        <section className="section-padding page">
            <div className="course-top-wrap mb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <p>
                                Showing {filteredAndSortedItems.length} of {allCourseItems.length} results
                            </p>
                        </div>

                        <div className="col-lg-4">
                            <div className="sort-select">
                                <select
                                    className="form-control"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    {sortOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
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
                    {filteredAndSortedItems.length > 0 ? (
                        filteredAndSortedItems.map((item) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={item.id}>
                                <CourseType data={item} category={category}/>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="mt-4">No results found for: {searchQuery}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CourseGrid;