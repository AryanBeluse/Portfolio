import React from 'react';

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-16 px-4 bg-gray-50 flex flex-col items-center text-center "
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 mt-5">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                {/* Technical Skills */}
                <div
                    className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-gray-100 rounded-xl shadow-inner hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Programming Languages
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="p-6 bg-gray-100 rounded-xl shadow-inner hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        Web Development
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>MERN Stack (React.js, Node.js)</li>
                        <li>Flask</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className="p-6 bg-gray-100 rounded-xl shadow-inner hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        AI/ML
                    </h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>Python (scikit-learn, Pandas)</li>
                    </ul>
                </div>

                <div className="p-6 bg-gray-100 rounded-xl shadow-inner hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Tools</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li>Git</li>
                        <li>PowerBI</li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 p-6 bg-gray-100 rounded-xl shadow-inner">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                        Soft Skills
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-600">
                        <li className="px-4 py-2 bg-white rounded-lg shadow">
                            Fast Learner
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg shadow">
                            Communication & Collaboration
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg shadow">
                            Adaptability
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg shadow">
                            Leadership
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg shadow">
                            Detail Oriented
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skills;
