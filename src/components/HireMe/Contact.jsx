import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission - open Gmail compose
        const subject = encodeURIComponent(`${formData.subject} - ${formData.projectType} Project Inquiry`);
        const body = encodeURIComponent(`Hello Abrham,
    
    I hope this email finds you well. I'm reaching out regarding a potential project collaboration.
    
    Project Details:
    ${formData.message}
    
    Best regards,
    ${formData.name}`);

        const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=abrhamteshe321@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailLink, '_blank');
    };
    return (
        <div className='bg-neutral-dark/50 p-8 rounded-xl border border-gray-700 mb-10'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Start Your Project</h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-gray-300 mb-2'>Name</label>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:border-primary-dark focus:outline-none transition-colors'
                            placeholder='Your full name'
                        />
                    </div>
                    <div>
                        <label className='block text-gray-300 mb-2'>Email</label>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:border-primary-dark focus:outline-none transition-colors'
                            placeholder='your.email@example.com'
                        />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                        <label className='block text-gray-300 mb-2'>Project Type</label>
                        <select
                            name='projectType'
                            value={formData.projectType}
                            onChange={handleChange}
                            required
                            className='w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:border-primary-dark focus:outline-none transition-colors'
                        >
                            <option value=''>Select project type</option>
                            <option value='web-app'>Web Application</option>
                            <option value='api'>API Development</option>
                            <option value='consulting'>Technical Consulting</option>
                            <option value='other'>Other</option>
                        </select>
                        {formData.projectType === 'other' && <p className='text-sm text-ternary-dark/50'>Please specify you answer in the project details</p>}
                    </div>
                    <div>
                        <label className='block text-gray-300 mb-2'>Subject</label>
                        <input type='text' name='subject' value={formData.subject} onChange={handleChange} required className='w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:border-primary-dark focus:outline-none transition-colors' placeholder='Project subject or title' />
                    </div>
                </div>
                <div>
                    <label className='block text-gray-300 mb-2'>Project Details</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className='w-full px-4 py-3 bg-neutral-dark border border-gray-600 rounded-lg text-white focus:border-primary-dark focus:outline-none transition-colors resize-none'
                        placeholder='Tell me about your project, timeline, and any specific requirements...'
                    />
                </div>
                <div className='text-center'>
                    <button
                        type='submit'
                        className='text-neutral-dark bg-linear-to-r from-secondary-dark to-primary-dark px-8 py-3 rounded-3xl font-semibold hover:shadow-lg shadow-primary-dark hover:scale-105 transition-all duration-1000'
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact