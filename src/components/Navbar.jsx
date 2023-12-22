import React, { useState, useEffect } from "react";
import { FaShoePrints } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check user authentication status on component mount
    // You can fetch this information from the server or local storage
    // For simplicity, I'm using a hypothetical function `checkAuthenticationStatus`
    const isAuthenticated = checkAuthenticationStatus();
    setIsLoggedIn(isAuthenticated);
  }, []);

  const handleLogout = () => {
    // Handle the logout logic here, and then navigate to the home page
    // For simplicity, I'm using a hypothetical function `logoutUser`
    logoutUser();
    setIsLoggedIn(false);
    navigate("/"); // Navigate to the home page or another desired location
  };

  const navigation = [
    {
      index: 1,
      path: "",
      name: "Home",
    },
    {
      index: 2,
      path: "products",
      name: "Product",
    },
    {
      index: 3,
      path: "services",
      name: "Services",
    },
    {
      index: 4,
      path: "aboutus",
      name: "About",
    },
    {
      index: 5,
      path: "cart",
      name: "Cart",
    },
    {
      index: 6,
      path: isLoggedIn ? "" : "login",
      name: isLoggedIn ? "Logout" : "Login",
      onClick: isLoggedIn ? handleLogout : undefined,
    },
  ];

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <FaShoePrints size={30} className="text-white" />
          </div>

          <div className="hidden md:flex">
            <div className="ml-4 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.index}
                  to={`/${item.path}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                  onClick={item.onClick}
                >
                  <h1 className="font-signature">{item.name}</h1>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// This is a hypothetical function to check user authentication status
// You need to implement this based on your authentication logic
const checkAuthenticationStatus = () => {
  // For simplicity, return true if the user is authenticated, otherwise false
  return true; // Replace with your actual logic
};

// This is a hypothetical function to handle user logout
// You need to implement this based on your authentication logic
const logoutUser = () => {
  // Implement your logout logic here
};
