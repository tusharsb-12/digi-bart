import React, { useState, useMemo } from 'react'

// create context
export const UserSidebarContext = React.createContext()

export const UserSidebarProvider = ({ children }) => {
    const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false)

    function toggleUserSidebar() {
        setIsUserSidebarOpen(!isUserSidebarOpen)
    }

    function closeUserSidebar() {
        setIsUserSidebarOpen(false)
    }

    const value = useMemo(
        () => ({
            isUserSidebarOpen,
            toggleUserSidebar,
            closeUserSidebar,
        }),
        [isUserSidebarOpen]
    )

    return <UserSidebarContext.Provider value={value}>{children}</UserSidebarContext.Provider>
}
