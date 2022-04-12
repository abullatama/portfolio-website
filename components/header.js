import { useEffect } from "react";
import Link from "next/Link";
import styles from "../styles/scss/header.module.scss";

export default function Header() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem("theme");
  });

  const toggleDarkMode = (e) => {
    e.preventDefault();

    const docElement = document.documentElement;
    const lightToggle = document.getElementById("toggleLightMode");
    const darkToggle = document.getElementById("toggleDarkMode");

    if (docElement.classList.contains("dark")) {
      docElement.classList.toggle("dark");
      darkToggle.classList.remove("animate-fadeOut");
      darkToggle.classList.add("animate-fadeIn");
      lightToggle.classList.remove("animate-fadeIn");
      lightToggle.classList.add("animate-fadeOut");
      darkToggle.classList.remove("hidden");
      localStorage.theme = "light";
    } else {
      docElement.classList.toggle("dark");
      lightToggle.classList.remove("animate-fadeOut");
      lightToggle.classList.add("animate-fadeIn");
      darkToggle.classList.add("animate-fadeOut");
      darkToggle.classList.remove("animate-fadeIn");
      localStorage.theme = "dark";
    }
  };

  return (
    <header className="bg-lightHeader dark:bg-darkHeader">
      <div className="py-2 px-3 grid grid-cols-header-sm md:grid-cols-header-md max-w-screen-md m-auto items-center">
        <div className="logo mr-10 tracking-wider text-lg font-bangers">
          <Link href="/">
            <a>
              <h1>MAQBUL ARIF LATAMA</h1>
            </a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <Link href="/about">
            <a className="dark:text-white">About</a>
          </Link>
          <Link href="/work">
            <a className="dark:text-white">Works</a>
          </Link>
          <Link href="https://github.com/abullatama">
            <a className="inline-flex items-center gap-1 dark:before:bg-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 32C132.3 32 32 134.9 32 261.7c0 
                101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 
                003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 
                102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 
                2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 
                0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 
                0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 
                8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 
                480 134.9 379.7 32 256 32z"
                ></path>
              </svg>
              Source
            </a>
          </Link>
        </nav>

        <div id="darkModeButton">
          <button
            type="button"
            className="bg-purple-600 p-3 rounded-md text-white hover:bg-purple-800 transition duration-300 dark:hidden relative left-10"
            id="toggleDarkMode"
            onClick={toggleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 
              c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 
              C22.1,13.7,21.7,13.6,21.4,13.7z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="bg-yellow-200 p-3 rounded-md text-black hover:bg-yellow-400 transition duration-300"
            id="toggleLightMode"
            onClick={toggleDarkMode}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <path d="M12 1v2"></path>
                <path d="M12 21v2"></path>
                <path d="M4.22 4.22l1.42 1.42"></path>
                <path d="M18.36 18.36l1.42 1.42"></path>
                <path d="M1 12h2"></path>
                <path d="M21 12h2"></path>
                <path d="M4.22 19.78l1.42-1.42"></path>
                <path d="M18.36 5.64l1.42-1.42"></path>
              </g>
            </svg>
          </button>
        </div>

        <div className="hamburger-button  md:hidden ml-2">
          <button
            type="button"
            className="border border-gray-300/25 p-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill="currentColor"
                d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
