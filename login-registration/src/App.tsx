import React, { useState } from 'react';
import './App.css';
import Router from './pages/Router';
import { ThemeModeProvider } from './context/ThemeModeProvider';
import { Theme } from './context/themeModeContext';

const App = () => {
  const [theme, setTheme] = useState(Theme.Light)
  const isLightTheme = theme === Theme.Light
  const onChangeTheme = (value: Theme) => {
    setTheme(value)
  }

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className={isLightTheme ? "App" : "App _dark"}>
            <Router></Router>
      </div>
    </ThemeModeProvider>
  );
}

export default App;