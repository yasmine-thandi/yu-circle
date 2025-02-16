import { useState } from "react";
import Header from "../components/Header/Header";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement login stuff here
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-lg border bg-white p-8 shadow-md">
          <h1 className="mb-4 text-xl font-fancy font-bold">Login</h1>
          <form action="/login" method="POST" onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form-type" value="login" />
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="Your username"
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm font-fancy outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--color-red)] p-3 font-fancy text-white transition hover:bg-red-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
