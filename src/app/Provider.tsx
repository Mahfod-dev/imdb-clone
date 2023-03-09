'use client'

import { ThemeProvider } from "next-themes";


export default function MyApp({ children}:{children:React.ReactNode}) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
        <div className=" bg-green-100 dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
        </div>
        </ThemeProvider>
    )
    }
