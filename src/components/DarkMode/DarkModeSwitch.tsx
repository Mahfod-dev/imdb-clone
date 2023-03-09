'use client';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import {useTheme} from 'next-themes'
import { useCallback,useState } from 'react';

function DarkModeSwitch() {

const {systemTheme,theme,setTheme} = useTheme();

const [mounted, setMounted] = useState(true);

const switchTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
}, [theme, setTheme]);

const currentTheme = theme === 'system' ? systemTheme : theme;


	return <>
    
 {
        mounted && (
            <div className="flex items-center justify-center">
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 p-3 rounded dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-800 dark:hover:text-gray-900 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-gray-100 focus:outline-none focus:ring"
                    onClick={switchTheme}
                >
                    {currentTheme === 'dark' ? <MdLightMode /> : <BsFillMoonFill />}
                </button>
            </div>
        )
 }
    
    
    
    </>;
}
export default DarkModeSwitch;
