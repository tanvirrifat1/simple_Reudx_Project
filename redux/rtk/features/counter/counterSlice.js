const createSlice = require('@reduxjs/toolkit')

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            console.log('dfh')
        }
    }
})