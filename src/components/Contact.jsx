import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: '2de60f57-8c09-4676-8493-e2f6d264389c',
    });

    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),

        });

        const result = await res.json();
        setResponse(result);
        setLoading(false);

        if (result.success) {
            setFormData({ name: '', email: '', message: '', access_key: formData.access_key });
        }
    };

    return (
        <section
            id="contact"
            className="py-16 mt-4 bg-gray-100 flex flex-col items-center text-center px-4 border-b border-t border-gray-400"
        >
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Get in Touch</h2>


            {/* Flexbox Layout for Left (Contacts) and Right (Form) */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-6xl gap-8">

                {/* Left: Contacts Section */}
                <div className="w-full md:w-1/3  p-6  text-left">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Info</h3>
                    <p className="text-lg text-gray-600 mb-8">
                        Feel free to reach out if you have any questions or just want to say hi!
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 font-semibold text-lg">
                        <img src="mail_icon.svg" alt="Mail Icon" className="w-5 h-5" />
                        aryan.beluse@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 font-semibold text-lg">
                        <img src="call_icon.svg" alt="Call Icon" className="w-5 h-5" />
                        7420004581
                    </p>
                    <p className="flex items-center gap-2 text-gray-600 font-semibold text-lg">
                        <img src="location_icon.svg" alt="Location Icon" className="w-5 h-5" />
                        Pune, India
                    </p>
                </div>

                {/* Right: Contact Form */}
                <form
                    className="w-full md:w-1/2 bg-white p-6 rounded-2xl shadow-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Your name'
                            required
                            className="w-full px-3 py-2 mt-1 bg-gray-100  border rounded-lg focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Your email '
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring-primary focus:border-primary"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder='Feel free to reach out!'
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 mt-1 bg-gray-100 border rounded-lg focus:ring-primary focus:border-primary"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-primary rounded-lg hover:bg-primary-dark transition duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>

                    {response && (
                        <p className={`mt-4 text-sm ${response.success ? 'text-green-500' : 'text-red-500'}`}>
                            {response.message}
                        </p>
                    )}
                </form>
            </div>
        </section>

    );
};

export default Contact;
