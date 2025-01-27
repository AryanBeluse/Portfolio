import React from 'react';

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-16 mt-4 bg-gray-100 flex flex-col items-center text-center px-4
                        border-b border-t border-gray-400"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
                Feel free to reach out if you have any questions or just want to say hi!
            </p>
            <form
                className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-lg"
                action="https://formsubmit.co/aryan.beluse@gmail.com"
                method="POST"
            >
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-primary focus:border-primary"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-primary focus:border-primary"
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full px-3 py-2 mt-1 border rounded-lg focus:ring-primary focus:border-primary"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 text-white bg-primary rounded-lg hover:bg-primary-dark transition duration-200"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;

