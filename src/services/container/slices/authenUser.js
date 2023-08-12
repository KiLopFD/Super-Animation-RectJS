import { createSlice } from "@reduxjs/toolkit";

const vsCodeSlice = createSlice({
    name: 'vsCode',
    initialState: {
        authen: false,
    },
    reducers: {
        checkAuthen: (state, valCheck) => {
            
            if (valCheck.payload.detail === 'success')
            {
                // console.log(valCheck.payload)
                return {
                    authen: true 
                }
            }
            else 
                return {
                    authen:false,
                }
        }
    }
})

// Set up: action, reducer
const { actions, reducer } = vsCodeSlice
export const { checkAuthen } = actions
export default reducer