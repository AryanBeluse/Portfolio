import React from 'react';
import Projects from './Projects';


const Project = () => {
    const projectData = [
        {
            title: 'Personalized Healthcare Recommendations',
            description:
                'A full-stack AI-powered healthcare application offering personalized services like disease prediction, diet plans, and fitness tracking.',
            techStack: ['React.js', 'Node.js', 'Flask', 'MongoDB', 'Python'],
            link: 'https://github.com/your-project-link',
        },
        {
            title: 'Movie Recommendation System',
            description:
                'A machine learning-based app that predicts user preferences for movies based on watch history and ratings.',
            techStack: ['Python', 'Flask', 'React.js', 'MongoDB', 'Scikit-learn'],
            link: 'https://github.com/your-project-link',
        },
    ];

    return (
        <section id="project" className="py-16 px-4 bg-gray-50 border-t border-gray-400">
            <h2 className="text-3xl font-bold text-center mt-5 text-gray-800 mb-8">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {projectData.map((project, index) => (
                    <Projects key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Project;

