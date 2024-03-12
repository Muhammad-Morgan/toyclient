import React, { useContext, useReducer } from 'react'
import sublinks from './data'
import { reducer } from './reducer'
const AppContext = React.createContext()
const defaultState = {
    userInfo: {
        name: '',
        myID: ''
    },
    isSidebarOpen: false,
    isSubmenuOpen: false,
    page: {
        page: '',
        links: []
    },
    location: {}
}
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const openSidebar = () => dispatch({ type: 'openSidebar' })
    const closeSidebar = () => dispatch({ type: 'closeSidebar' })
    const openSubmenu = (newData) => {
        const linkTitle = sublinks.find((item) => item.page === newData.page)
        dispatch({ type: 'openSubmenu', payload: { newData, linkTitle } })
    }
    const closeSubmenu = () => dispatch({ type: 'closeSubmenu' })
    const updateUserInfo = (newData) => dispatch({ type: 'updateUserInfo', payload: newData })
    return <AppContext.Provider value={{
        ...state,
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        updateUserInfo
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}