import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import toast from 'react-hot-toast';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await authService.login({ email, password });
            toast.success('Login successful!');
            navigate('/dashboard');
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            toast.error(message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full glass-card p-8 rounded-2xl relative overflow-hidden">
                {/* Decorative background blur */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Sign in to continue your progress
                    </p>
                </div>

                <form className="space-y-6" onSubmit={onSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={onChange}
                                required
                                className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="Email address"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={onChange}
                                required
                                className="w-full pl-10 pr-3 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white/10"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-primary hover:text-secondary transition-colors">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
                    >
                        Sign In
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/signup" className="font-medium text-primary hover:text-secondary transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
