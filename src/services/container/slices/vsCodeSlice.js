import { createSlice } from "@reduxjs/toolkit";

const vsCodeSlice = createSlice({
    name: 'vsCode',
    initialState: {
        theme: 'Dracula',
        lang: 'cpp',
        fontSize: 18,
    },
    reducers: {
        setTheme: (state, valTheme) => {
            return {
                ...state,
                theme: valTheme.payload
            }
        },
        setLang: (state, valLang) => {
            // console.log(valLang)
            // Ví dụ: => {type: 'vsCode/setLang', payload: 'java'}
            return {
                ...state,
                lang: valLang.payload
            }
        },
        setFontSize: (state, valFontSize) => {
            return {
                ...state,
                fontSize: valFontSize.payload
            }
        },
    }
})

// Set up: action, reducer
const { actions, reducer } = vsCodeSlice
export const { setTheme, setFontSize, setLang } = actions
export default reducer