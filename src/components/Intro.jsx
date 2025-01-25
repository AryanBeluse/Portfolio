import React from 'react';

const Intro = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center py-16  bg-gray-100 border-b border-t border-gray-400">

            <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-gray-400 bg-gray-300 overflow-hidden shadow-lg">
                    {/* Replace src with your profile picture */}
                    <img
                        src="aryan.jpg"
                        alt="Aryan"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>


            <div className="text-center md:text-left">
                <h1 className="text-4xl font-bold text-gray-800">Aryan Beluse</h1>
                <p className="mt-4 text-lg text-gray-600">
                    A passionate developer with expertise in Web Development.
                    I love building projects that make a difference.
                </p>


                <div className="mt-6">
                    <a
                        href="Aryan_Resume.pdf"
                        download
                        className="inline-block px-6 py-3 text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition duration-200"
                    >
                        Download Resume
                    </a>
                </div>
                <div className="inline-flex space-x-8 mt-10">
                    <div
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => window.open("https://github.com/AryanBeluse", "_blank")}
                    >
                        <img src="github.png" alt="GitHub" />
                    </div>
                    <div
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => window.open("https://instagram.com", "_blank")}
                    >
                        <img src="instagram.png" alt="Instagram" />
                    </div>
                    <div
                        className="w-12 h-12 cursor-pointer"
                        onClick={() => window.open("https://linkedin.com", "_blank")}
                    >
                        <img src="linkedin.png" alt="LinkedIn" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Intro;
