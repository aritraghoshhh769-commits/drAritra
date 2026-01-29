'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

type Theme = 'dark' | 'light';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const controls = useAnimation();

  // On initial load, set the theme based on localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    // For new users, default to light theme, regardless of system preference.
    setThemeState(storedTheme || 'light');
  }, []);

  // Whenever the theme state changes, update the class on the html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const setTheme = async (newTheme: Theme) => {
    if (theme === newTheme) return;

    // 1. Fade to black
    await controls.start({
        opacity: 1,
        transition: { duration: 0.25, ease: 'easeIn' }
    });

    // 2. Change theme state and localStorage while screen is black
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 3. Fade back in
    await controls.start({
        opacity: 0,
        transition: { duration: 0.25, ease: 'easeOut', delay: 0.1 }
    });
  };

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
      <motion.div
        className="fixed inset-0 bg-black z-[9999] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={controls}
      />
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
