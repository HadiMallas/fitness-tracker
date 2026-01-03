import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <footer className="glass-nav py-8 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} HealthTrack. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
