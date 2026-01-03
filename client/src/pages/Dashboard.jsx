import { BarChart, Activity, Droplets, Moon } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-bold text-white">Welcome back, Hady!</h1>
                    <p className="text-gray-400">Here's your daily activity summary.</p>
                </div>
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                    Edit Profile
                </button>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-10">
                <StatCard
                    icon={<Activity className="text-primary" />}
                    label="Steps"
                    value="8,432"
                    subtext="84% of daily goal"
                />
                <StatCard
                    icon={<BarChart className="text-secondary" />}
                    label="Calories Burned"
                    value="420"
                    subtext="kcal"
                />
                <StatCard
                    icon={<Droplets className="text-blue-400" />}
                    label="Water Intake"
                    value="1.2L"
                    subtext="Target: 2.5L"
                />
                <StatCard
                    icon={<Moon className="text-purple-400" />}
                    label="Sleep"
                    value="7h 20m"
                    subtext="Good quality"
                />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-6">Activity Overview</h3>
                    <div className="h-64 flex items-end justify-between gap-4 px-2">
                        {[30, 45, 25, 60, 75, 50, 80].map((h, i) => (
                            <div key={i} className="w-full flex flex-col justify-end gap-2 group">
                                <div
                                    className="bg-white/10 rounded-t-lg hover:bg-primary transition-colors duration-300 relative"
                                    style={{ height: `${h}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
                                        {h * 10} mins
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500 text-center">
                                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Workouts</h3>
                    <div className="space-y-4">
                        <WorkoutItem name="Morning Run" time="Today, 7:00 AM" duration="30 min" />
                        <WorkoutItem name="Upper Body" time="Yesterday, 6:00 PM" duration="45 min" />
                        <WorkoutItem name="Yoga Flow" time="Mon, 8:00 AM" duration="60 min" />
                        <WorkoutItem name="HIIT Cardio" time="Sun, 10:00 AM" duration="25 min" />
                    </div>

                    <button className="w-full mt-6 py-2 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/5 transition-colors">
                        View All History
                    </button>
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ icon, label, value, subtext }) => (
    <div className="glass-card p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400 text-sm font-medium">{label}</span>
            <div className="p-2 bg-white/5 rounded-lg">{icon}</div>
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs text-gray-500">{subtext}</div>
    </div>
);

const WorkoutItem = ({ name, time, duration }) => (
    <div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer">
        <div>
            <div className="text-white font-medium">{name}</div>
            <div className="text-xs text-gray-500">{time}</div>
        </div>
        <div className="text-sm text-gray-400">{duration}</div>
    </div>
);

export default Dashboard;
