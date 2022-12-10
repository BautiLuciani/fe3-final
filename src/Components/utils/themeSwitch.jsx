export const themeSwitch = (state, action) =>{
    switch(action.type){
        case 'SWITCH_LIGHT':
            return {theme: action.color, data: ['light']}
        case 'SWITCH_DARK':
            return {theme: action.color, data: ['dark']}
        default:
            throw new Error()
    }
}