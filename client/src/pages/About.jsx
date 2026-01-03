import { Users, Shield, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Our Mission
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    At HealthTrack, we believe that fitness is not just a destination, but a journey.
                    Our mission is to empower individuals to take control of their health through data,
                    motivation, and community.
                </p>
            </div>

            {/* Stats/Highlight */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="glass-card p-8 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-gradient mb-2">10k+</h3>
                    <p className="text-gray-400">Active Users</p>
                </div>
                <div className="glass-card p-8 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-gradient mb-2">5M+</h3>
                    <p className="text-gray-400">Workouts Logged</p>
                </div>
                <div className="glass-card p-8 rounded-2xl text-center">
                    <h3 className="text-4xl font-bold text-gradient mb-2">4.9/5</h3>
                    <p className="text-gray-400">User Rating</p>
                </div>
            </div>

            {/* Story Section */}
            <div className="glass-card rounded-3xl p-8 md:p-12 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Built for Students, by Students</h2>
                        <p className="text-gray-300 leading-relaxed">
                            HealthTrack began as a university project with a simple goal: to make fitness tracking accessible and engaging.
                            We noticed that most apps were either too complex or too expensive. We wanted to build something that
                            combined professional-grade analytics with a user-friendly interface that anyone could use.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Today, we are constantly evolving, adding new features based on user feedback and the latest health research.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center border border-white/5">
                        <span className="text-white/20 font-bold text-2xl">Hady Mallas</span>
                        {/* Decorative circles */}
                        <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full blur-xl opacity-50" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 bg-secondary rounded-full blur-xl opacity-50" />
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-2xl">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Community First</h3>
                    <p className="text-gray-400 text-sm">We build features that foster support and competition.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                    <Shield className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Privacy Focused</h3>
                    <p className="text-gray-400 text-sm">Your health data is sensitive. We treat it with the utmost security.</p>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                    <Globe className="w-8 h-8 text-teal-400 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Universal Access</h3>
                    <p className="text-gray-400 text-sm">Fitness should be accessible to everyone, everywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
