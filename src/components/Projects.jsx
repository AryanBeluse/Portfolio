import React from 'react';

const Projects = ({ title, description, techStack, link }) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">

            <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>


            <p className="text-gray-600 mb-4">{description}</p>


            <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {techStack.map((tech, index) => (
                        <li
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-700 shadow"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Project Link */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary-dark transition"
                >
                    View Project
                </a>
            )}
        </div>
    );
};

export default Projects;
