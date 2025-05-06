import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div className="text-xl font-bold">PromptKit</div>

          {/* Menu */}
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-blue-400">
                Service
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
