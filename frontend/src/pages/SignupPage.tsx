import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          firstname: "Placeholder", // Placeholder for firstname [no field for that]
          lastname: "Placeholder",  // Placeholder for lastname [no field for that] 
          yorkId: "Placeholder",    // Placeholder for yorkId [no field for that] 
          phoneNumber: "000-000-0000" // Placeholder for phoneNumber [no field for that]
        }),
      });

      const rawText = await response.text();
      console.log("Raw Response Text:", rawText);

      if (response.ok) {
        console.log("Registration successful:", rawText);
        setSuccessMessage("Registration successful! Redirecting to login...");
        // Redirect to the home page after successful login so people can login
        window.location.href = "/login";
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        throw new Error(rawText || "Registration failed");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-lg border p-3 bg-white p-8 shadow-md">
          <h1 className="text-xl font-fancy font-bold">Sign Up</h1>
          <br />
          <form onSubmit={handleSubmit} className="space-y-5">
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
              />
            </div>
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 text-sm outline-none font-fancy focus:ring-2 focus:ring-[var(--color-red)]"
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
                className="w-full rounded-lg border p-3 text-sm font-fancy outline-none focus:ring-2 focus:ring-[var(--color-red)]"
                placeholder="Enter your password"
                required
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-600 text-sm">{successMessage}</p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--color-red)] p-3 font-fancy text-white transition hover:bg-red-700"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[var(--color-red)] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
