import React, { useState, useEffect, useCallback } from 'react';
// Assuming you'll have a small CSS file for the widget itself
// import './ThemeSwitcherWidget.css';
// import './tswitch.css';

// --- Configuration ---
// Define the available theme modes explicitly
const THEME_MODES = [
  'light', 
  'dark', 
  'theme-a', 
  'theme-b'
];

// Define the key for localStorage to persist the user's choice
const STORAGE_KEY = 'app-color-scheme';

/**
 * A top-level widget for selecting and applying the application's theme/color scheme.
 * It manages the 'data-color-scheme-mode' attribute on the document body.
 * @returns {JSX.Element} The theme selection widget UI.
 */
const ThemeSwitcherWidget = () => {
  // 1. Initialize state: Try to load the mode from localStorage, default to 'light'
  const [currentMode, setCurrentMode] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'light';
  });

  // 2. The core logic to update the DOM and localStorage
  const applyTheme = useCallback((mode) => {
    // Input validation: Ensure the mode is one of the allowed modes
    if (!THEME_MODES.includes(mode)) {
        console.warn(`Attempted to set an invalid theme mode: ${mode}`);
        return;
    }
    
    // Set the state
    setCurrentMode(mode);
    
    // Crucial step: Apply the data attribute to the document body!
    // This is what triggers your CSS variables in :root and [data-color-scheme-mode] selectors.
    document.body.setAttribute('data-color-scheme-mode', mode);

    // Persist the choice for the next visit
    localStorage.setItem(STORAGE_KEY, mode);
    
    console.log(`Theme set to: ${mode}`);
    
  }, []); // Empty dependency array means this function is created once

  // 3. Effect Hook: Run on component mount and whenever the currentMode state changes.
  useEffect(() => {
    // Ensure the theme is applied immediately when the component loads (and state is initialized)
    applyTheme(currentMode);

    // NOTE: We don't need a cleanup function here as we only set an attribute.
    
  }, [currentMode, applyTheme]); // Depend on currentMode and applyTheme

  // Handler for when a new theme is selected from the dropdown
  const handleThemeChange = (event) => {
    applyTheme(event.target.value);
  };

  // 4. Render the Widget UI
  return (
    <div className="theme-switcher-widget">
      <label htmlFor="theme-select">Select Theme Mode:</label>
      <select 
        id="theme-select" 
        value={currentMode} 
        onChange={handleThemeChange}
        aria-label="Application Theme Selector"
      >
        {THEME_MODES.map(mode => (
          <option key={mode} value={mode}>
            {/* Capitalize the first letter for display */}
            {mode.charAt(0).toUpperCase() + mode.slice(1).replace('-', ' ')}
          </option>
        ))}
      </select>
      <p className="current-mode-display">
        Current Mode: <strong className="text-accent">{currentMode}</strong>
      </p>
    </div>
  );
};

export default ThemeSwitcherWidget;