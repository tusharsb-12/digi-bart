import React from 'react'

function Main({ children }) {
    return (
        <main className="h-full overflow-y-auto text-gray-600 dark:text-gray-300">
            <div className="container grid px-6 mx-auto h-full">{children}</div>
        </main>
    )
}

export default Main
