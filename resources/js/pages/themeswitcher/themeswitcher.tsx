import './widget/tswitch.css';
import ThemeSwitcherWidget from './widget/tswitch-widget';

export const ThemeSwitcherWidgetDemo = () => {
  return (
    <main className="app-container themer-responsive">
        <header>
            <h1>Theme Switcher Widget Demo</h1>
            <ThemeSwitcherWidget />
        </header>
        <h1>Hello, Themed World!</h1>
        <button className="themer-button">Click Me</button>
    </main>
  );
};

export default ThemeSwitcherWidgetDemo;