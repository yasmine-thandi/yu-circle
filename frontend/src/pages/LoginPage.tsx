import { useState } from "react";
import Header from "../components/Header/Header";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
  
    try {
      const response = await fetch("/profiles/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });
  
      console.log("Full Response:", response);
      console.log("Status:", response.status);
      console.log("Headers:", JSON.stringify([...response.headers]));
  
      // Get the raw response text
      const rawText = await response.text();
  
      // Check if the request was successful
      if (response.ok) {
        console.log("Login successful:", rawText);
  
        // Redirect to the home page after successful login
        window.location.href = "/";
      } else {
        throw new Error(rawText || "Login failed");
      }
    } catch (error: any) {
      console.error("Fetch Error:", error);
      setErrorMessage(error.message || "An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg rounded-lg border bg-white p-8 shadow-md">
          <h1 className="mb-4 text-xl font-fancy font-bold">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form-type" value="login" />
            <div>
              <label className="block text-sm font-medium font-fancy text-gray-700">
                Username
              </label>
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
              <label className="block text-sm font-medium font-fancy text-gray-700">
                Password
              </label>
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
            {errorMessage && (
              <p className="text-red-600 text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              className="w-full rounded-lg bg-[var(--color-red)] p-3 font-fancy text-white transition hover:bg-red-700"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;