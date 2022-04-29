import React, { useState } from 'react';
import './App.css';
import Authorization from './pages/Authorization';
import { ThemeModeProvider } from './context/ThemeModeProvider';
import { Theme } from './context/themeModeContext';
import HeaderPage from './components/HeaderPage';

const App = () => {
  const [theme, setTheme] = useState(Theme.Light)

  const onChangeTheme = (value: Theme) => {
    setTheme(value)
  }

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
            <HeaderPage></HeaderPage>
            <Authorization></Authorization>
      </div>
    </ThemeModeProvider>
  );
}

export default App;