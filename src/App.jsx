import { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-600 ${theme === "light" ? "theme-light" : "theme-dark"}`}
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
