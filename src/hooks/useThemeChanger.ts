import { useState } from 'react';

export type Themes = 'light' | 'dark';
export type ThemeWithSystem = 'system' | Themes;

function getSystemTheme() {
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    return 'dark';
  } else {
    return 'light';
  }
}

function setThemeToLocalStorage(theme: Themes) {
  localStorage.setItem('theme', theme);
}

function changeThemeHtml(theme: Themes) {
  document.documentElement.className = theme;
}

export default function useThemeChanger() {
  const systemTheme = getSystemTheme();
  const [theme, setTheme] = useState(() => {
    const theme = (localStorage.getItem('theme') ?? systemTheme) === 'dark' ? 'dark' : 'light';
    changeThemeHtml(theme);
    return theme as Themes;
  });

  function changeTheme(selectedTheme: ThemeWithSystem) {
    const theme = selectedTheme === 'system' ? systemTheme : selectedTheme;

    setTheme(theme);
    changeThemeHtml(theme);
    setThemeToLocalStorage(theme);
  }

  return {
    theme,
    changeTheme,
  };
}
