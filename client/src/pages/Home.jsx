import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/90 z-10" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

                <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                        <span className="block text-white mb-2">Elevate Your</span>
                        <span className="text-gradient">Fitness Journey</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Track your workouts, monitor your nutrition, and achieve your goals with the most advanced wellness platform.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/signup"
                            className="group relative px-8 py-4 bg-primary rounded-full text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25 overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative flex items-center gap-2">
                                Get Started Free <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 glass-card rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Activity className="w-8 h-8 text-primary" />}
                        title="Advanced Tracking"
                        description="Log every workout with precision. Track sets, reps, and progress over time with detailed analytics."
                    />
                    <FeatureCard
                        icon={<Heart className="w-8 h-8 text-secondary" />}
                        title="Health Monitoring"
                        description="Keep an eye on vital stats. Monitor heart rate, sleep quality, and recovery metrics."
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-yellow-400" />}
                        title="Personalized Plans"
                        description="AI-driven recommendations tailored to your specific body type and fitness goals."
                    />
                </div>
            </section>

            {/* UI Showcase / Callout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-4xl font-bold text-white">Data that drives performance</h2>
                            <p className="text-gray-300 text-lg">
                                Visualize your progress with our stunning interactive dashboard. See trends, break records, and stay motivated.
                            </p>
                            <Link to="/dashboard" className="text-primary hover:text-secondary font-semibold flex items-center gap-2 transition-colors">
                                View Demo Dashboard <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="flex-1 w-full relative">
                            {/* Abstract Dashboard Mockup */}
                            <div className="aspect-video bg-dark/50 rounded-xl border border-white/10 p-4 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="h-full w-full flex items-end justify-between gap-2">
                                    {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                        <div
                                            key={i}
                                            className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-md opacity-80"
                                            style={{ height: `${h}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
        <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/10">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
);

export default Home;
