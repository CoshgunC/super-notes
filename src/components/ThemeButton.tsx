
import { useTheme } from "next-themes";

import { FiSun, FiMoon } from "react-icons/fi";

export const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <FiSun/> : <FiMoon/>}
    </button>
  );
};