import React, { ReactNode, createContext, useState } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const handleThemeChange = (selectedTheme: Theme) => {
        setTheme(selectedTheme);
        console.log(selectedTheme)
    };

    const contextValue: ThemeContextProps = {
        theme,
        setTheme: handleThemeChange
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
