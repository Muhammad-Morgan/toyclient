export const reducer = (state, action) => {
    if (action.type === 'openSidebar') {
        return {
            ...state,
            isSidebarOpen: true
        }
    }
    if (action.type === 'closeSidebar') {
        return {
            ...state,
            isSidebarOpen: false
        }
    }
    if (action.type === 'openSubmenu') {
        const { newData, linkTitle } = action.payload
        const { location } = newData
        const { page, links } = linkTitle
        return {
            ...state,
            location,
            page: {
                ...state.page,
                page,
                links
            },
            isSubmenuOpen: true
        }
    }
    if (action.type === 'closeSubmenu') {
        return {
            ...state,
            isSubmenuOpen: false
        }
    }
    if(action.type === 'updateUserInfo'){
        return {
            ...state,
            userInfo: {
                ...state.userInfo,
                name: action.payload.name,
                myID: action.payload.myID,
            }
        }
    }
    return state
}