import React from 'react';

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
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
                    className="py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none"
                >
                    Skills
                </li>
                <li
                    onClick={() => scrollToSection('project')}
                    className="py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none"
                >
                    Projects
                </li>
                <li
                    onClick={() => scrollToSection('contact')}
                    className="py-1 hover:text-gray-600 cursor-pointer focus:text-primary focus:outline-none"
                >
                    Contact
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
