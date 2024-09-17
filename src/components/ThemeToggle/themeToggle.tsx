import { useEffect, useState } from "react";
import './themeToggle.scss';

export const ThemeToggle : React.FC = () => {
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);


    useEffect(() => {
        document.body.classList.toggle("dark", isDarkTheme);   
    }, [isDarkTheme]);

    const toggleTheme = () => {
        setDarkTheme(!isDarkTheme);
    }

    return (
        <>
              <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
          checked={isDarkTheme} onChange={toggleTheme}
        />
        <label className="toggle-switch-label" htmlFor="toggleSwitch">
          <span className="toggle-switch-inner" />
          <span className="toggle-switch-switch" />
        </label>
      </div>
        {/* <label>
            <input type="checkbox" name="" id=""  checked={isDarkTheme} onClick={toggleTheme} />
        </label> */}
        </>
    )
}