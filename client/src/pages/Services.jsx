import { Dumbbell, Utensils, Target, ArrowRight, LayoutDashboard, Clock, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="text-secondary text-sm font-medium flex items-center gap-2">
                            <Zap className="w-4 h-4" /> Comprehensive Fitness Solutions
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Everything You Need to <br />
                        <span className="text-gradient">Build a Better You</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Unlock your potential with our suite of advanced tracking tools.
                        From nutrition to workouts, we've designed every feature to help you succeed.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    <ServiceCard
                        icon={<Dumbbell className="w-8 h-8 text-white" />}
                        color="bg-primary"
                        title="Workout Tracking"
                        description="Log every rep, set, and weight with our intuitive interface. Visualize your strength progression over time."
                        features={['Custom Routines', 'Rest Timer', '1RM Calculator', 'Volume Analytics']}
                    />
                    <ServiceCard
                        icon={<Utensils className="w-8 h-8 text-white" />}
                        color="bg-secondary"
                        title="Smart Nutrition"
                        description="Track calories and macronutrients with ease. Scan barcodes or search our massive food database."
                        features={['Barcode Scanner', 'Macro Goals', 'Water Intake', 'Meal History']}
                    />
                    <ServiceCard
                        icon={<Target className="w-8 h-8 text-white" />}
                        color="bg-teal-500"
                        title="Goal Management"
                        description="Set SMART goals and track your progress towards them. Get notified when you hit new milestones."
                        features={['Weight Goals', 'Measurement Logs', 'Deadline Tracking', 'Progress Photos']}
                    />
                    <ServiceCard
                        icon={<LayoutDashboard className="w-8 h-8 text-white" />}
                        color="bg-blue-500"
                        title="Visual Analytics"
                        description="Turn your data into insights. View detailed charts and graphs to understand your habits and trends."
                        features={['Weekly Reports', 'Trend Lines', 'Heatmaps', 'Export Data']}
                    />
                    <ServiceCard
                        icon={<Clock className="w-8 h-8 text-white" />}
                        color="bg-purple-500"
                        title="Smart Scheduling"
                        description="Plan your week in advance. Ensure you never miss a workout with integrated calendar features."
                        features={['Drag & Drop', 'Google Cal Sync', 'Rest Day Planning', 'Reminders']}
                    />
                    <div className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center border-2 border-dashed border-white/10 hover:border-primary/50 transition-colors group">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                        <p className="text-gray-400">We're constantly building new features. Stay tuned for AI Coaching!</p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border border-white/10 p-12 text-center">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
                        Ready to Start Your Transformation?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
                        Join thousands of users who are crushing their goals with HealthTrack.
                        Start your free 14-day trial today.
                    </p>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/signup"
                            className="px-8 py-4 bg-white text-dark rounded-full font-bold hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg shadow-white/10"
                        >
                            Get Started Now
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all"
                        >
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ icon, color, title, description, features }) => (
    <div className="glass-card p-1 rounded-2xl group hover:-translate-y-2 transition-all duration-300">
        <div className="bg-dark/50 p-8 rounded-xl h-full flex flex-col relative overflow-hidden">
            {/* Hover Gradient Overlay */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity`} />

            <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-${color}/20 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                {description}
            </p>

            <div className="space-y-3 pt-6 border-t border-white/5">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className={`w-4 h-4 mr-3 ${color.replace('bg-', 'text-')}`} />
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Services;
