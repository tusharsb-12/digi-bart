import React, {  Suspense, } from 'react'
import Header from './Header'
import Main from './Main'
import ThemedSuspense from './ThemedSuspense'

function Layout({ children }) {
    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900`}
        >
            <div className="flex flex-col flex-1 w-full">
                <Header />
                <Main>
                    <Suspense fallback={<ThemedSuspense />}>
                        {children}
                    </Suspense>
                </Main>
            </div>
        </div>
    )
}

export default Layout
