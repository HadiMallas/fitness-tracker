import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
                        <p className="text-gray-400 text-lg">
                            Have questions or feedback? We'd love to hear from you. Fill out the form or reach out directly.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-3 bg-primary/20 rounded-full text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email us at</p>
                                <p className="text-white font-medium">support@healthtrack.com</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-3 bg-secondary/20 rounded-full text-secondary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Call us at</p>
                                <p className="text-white font-medium">+961 70 066 230</p>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                            <div className="p-3 bg-teal-400/20 rounded-full text-teal-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Visit us</p>
                                <p className="text-white font-medium">Chouf</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="glass-card p-8 rounded-3xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                name="message"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending' || status === 'success'}
                            className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {status === 'sending' ? (
                                'Sending...'
                            ) : status === 'success' ? (
                                'Message Sent!'
                            ) : (
                                <>
                                    Send Message <Send className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
