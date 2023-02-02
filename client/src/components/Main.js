import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
function Main({ children }) {
    return (
        <Scrollbars>
            <main className="h-full overflow-y-auto text-gray-600 dark:text-gray-300">
                <div className="container grid px-6 mx-auto h-full">{children}</div>
            </main>
        </Scrollbars>
    )
}

export default Main
