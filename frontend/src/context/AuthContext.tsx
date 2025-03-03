import { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  user: any;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create the context with an empty default value (not authenticated, no user logged in)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // check cookies to see if login cookies exist already
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // re-use login function to do login
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("/profiles/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const rawText = await response.text();
      
      if (!response.ok || rawText.trim() !== "Authentication successful") {
        throw new Error(rawText || "Invalid credentials");
      }

      const userData = { username }; // Mock user data since API returns only a success message
      localStorage.setItem("user", JSON.stringify(userData)); // Store user as cookie
      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // logout from webpage
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
