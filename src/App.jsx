import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const projects = [
  {
    title: "Anaxi",
    description: "A google maps api based application",
    link: "https:www.anaxi.app",
    repository: "https://github.com/Lsenn404/",
  },
  {
    title: "isGame: True",
    description: "A simple 2d sidescroller made with phaser",
    link: "https://isgame-true.herokuapp.com/",
    repository: "https://github.com/brandonkylely/isGame-True",
  },
  {
    title: "Urban Info",
    description:
      "A teleport api based application that shows information about a city",
    link: "https://github.com/yourusername/project3",
    repository: "https://github.com/noahfajarda/Urban-Info",
  },
];

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen py-6 flex flex-col justify-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-r from-blue-400 to-indigo-500"
              : "bg-gradient-to-r from-green-400 to-blue-500"
          } shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl`}
        ></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-4xl font-bold mb-4">Logan Senn</h1>
          <h2 className="text-xl mb-4">
            Full Stack Developer | B.B.A. in Finance
          </h2>

          <button
            onClick={toggleDarkMode}
            className={`border rounded-md p-2 ${
              isDarkMode
                ? "bg-white text-gray-800"
                : "bg-gray-800 text-white"
            }`}
          >
            {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          </button>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 mt-2 inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
                <div> </div>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 mt-2 inline-flex items-center"
                >
                  Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
