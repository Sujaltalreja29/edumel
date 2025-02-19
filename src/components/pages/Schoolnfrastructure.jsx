
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/blog/index';
const SchoolInfrastructure = () => {
    return (
        <>
            <Layout>
            <PageBanner
                        title="School Infrastructure"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Campus"
                        />
                <div className="container my-5">
                <div className=" max-w-4xl mx-auto p-6 py-50">
                    <h1 className="text-3xl font-bold mb-4 text-center">School Infrastructure</h1>

                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Campus Overview</h2>
                        <p className="text-gray-700">
                            Our school campus is spread across 50 acres, featuring modern classrooms,
                            state-of-the-art laboratories, a well-stocked library, and extensive
                            sports facilities. With lush green surroundings, we provide a perfect
                            environment for learning and growth.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-2">Campus Tour Video</h2>
                        <div className="flex justify-center" style={{ height: "500px" }}>
                            <iframe
                                className="w-full h-500 md:h-80"
                                style={{width: "1200px" ,  height : "500px"}}
                                src="https://www.youtube.com/embed/0xf5UuqMW5Y"
                                title="Campus Tour Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                        </div>
                    </section>
                </div>
                </div>
            </Layout>
        </>
    );
};

export default SchoolInfrastructure;
