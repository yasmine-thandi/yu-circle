import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);
    // TODO: sign up logic
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-lg border p-3 bg-white p-8 shadow-md">
          <h1 className="text-xl font-fancy font-bold">Sign Up</h1>
          <br></br>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-(--color-red)"
                placeholder="Your username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm outline-none font-fancy focus:ring-2 focus:ring-(--color-red)"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm font-fancy outline-none focus:ring-2 focus:ring-(--color-red)"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-(--color-red) p-3 font-fancy text-white transition hover:bg-red-700"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-(--color-red) hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
