import { Dumbbell, Utensils, Target, ArrowRight, LayoutDashboard, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="text-gradient">Comprehensive Tracking</span> for Your Life
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We provide all the tools you need to manage your wellness journey in one unified platform.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                    icon={<Dumbbell className="w-10 h-10 text-primary" />}
                    title="Exercise Logging"
                    description="A complete gym log in your pocket. Track sets, reps, weight, and rest times. Support for customized workout routines and history analysis."
                    features={['Strength Training', 'Cardio Tracking', 'Custom Routines']}
                />
                <ServiceCard
                    icon={<Utensils className="w-10 h-10 text-secondary" />}
                    title="Diet & Nutrition"
                    description="Log your meals effortlessly. Track calories, macronutrients, and water intake to ensure you're fueling your body correctly."
                    features={['Calorie Counter', 'Macro Breakdown', 'Meal History']}
                />
                <ServiceCard
                    icon={<Target className="w-10 h-10 text-teal-400" />}
                    title="Goal Setting"
                    description="Define your targets and let us help you reach them. Whether it's weight loss, muscle gain, or running a 5K."
                    features={['Progress Visualization', 'Milestone Alerts', 'Deadline Tracking']}
                />
                <ServiceCard
                    icon={<LayoutDashboard className="w-10 h-10 text-blue-400" />}
                    title="Analytics Dashboard"
                    description="Visualize your progress with our analytics dashboard. See your workout trends and nutrition habits."
                    features={['Visual Charts', 'Weekly Reports', 'Trend Analysis']}
                />
                <ServiceCard
                    icon={<Clock className="w-10 h-10 text-purple-400" />}
                    title="Workout Scheduling"
                    description="Plan your workouts in advance. Schedule your exercise sessions and get reminders."
                    features={['Calendar View', 'Reminders', 'Plan Ahead']}
                />
            </div>

            <div className="mt-20 text-center">
                <div className="glass-card inline-block p-8 rounded-2xl max-w-3xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to take control?</h3>
                    <p className="text-gray-400 mb-8">
                        Join thousands of users who have transformed their lives with HealthTrack.
                    </p>
                    <Link
                        to="/signup"
                        className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all"
                    >
                        Start Your Free Trial
                    </Link>
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ icon, title, description, features }) => (
    <div className="glass-card p-8 rounded-2xl flex flex-col h-full hover:bg-white/10 transition-colors duration-300">
        <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 ring-1 ring-white/10">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                    <ArrowRight className="w-4 h-4 text-primary mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
    </div>
);

export default Services;
