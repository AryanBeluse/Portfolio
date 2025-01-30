import React, { useState } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(id);
    };

    return (
        <nav className="flex items-center justify-between text-lg py-4 px-4   border-gray-400 bg-white shadow-md sticky top-0 z-50">
            <div className=" text-xl sm:text-2xl font-bold text-primary cursor-pointer"
                onClick={() => scrollTo(0, 0)}>
                Portfolio
            </div>
            <ul className="flex items-center gap-8 font-medium">
                <li
                    onClick={() => scrollToSection('skills')}
                    className={`${activeSection === 'skills' ? 'underline decoration-primary text-primary decoration-2' : ''} py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none`}
                >
                    Skills
                </li>
                <li
                    onClick={() => scrollToSection('project')}
                    className={`${activeSection === 'project' ? 'underline decoration-primary decoration-2 text-primary' : ''} py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none`}
                >
                    Projects
                </li>
                <li
                    onClick={() => scrollToSection('contact')}
                    className={`${activeSection === 'contact' ? 'underline decoration-primary text-primary decoration-2' : ''} py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none`}
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
