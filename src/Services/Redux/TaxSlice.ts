import { createSlice } from '@reduxjs/toolkit' 

interface StateType{
    loading: boolean,
    data: string[]
}
const initialState: StateType = {
    loading: true,
    data: [] 
}
export const TaxSlice = createSlice({
    name: 'tax',
    initialState,
    reducers: {
        setLoading: (state, { payload }: { payload: boolean}) => {
            state.loading = payload
        },
        setTax: (state, { payload }:{ payload: Array<string>}) => {
            state.data = payload
        }
        
    }
})

export const { setLoading, setTax } = TaxSlice.actions;
export default TaxSlice.reducer;