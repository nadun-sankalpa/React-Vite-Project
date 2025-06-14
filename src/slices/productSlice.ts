import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface  ProductState {
    list:[],
    error: string | null
}

const initialState: ProductState = {
    list:[],
    error: null
}

export const getAllProduct = createAsyncThunk(
    'product/getAllProduct',
    async () => {
        const response = await fetch('./product-data.json')
        const jsonData = await response.json()
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder )=> {
      builder.addCase(getAllProduct.pending, () => {
          alert("Products are stillloading")
      })
          .addCase(getAllProduct.fulfilled, (state, action) => {
              state.list = action.payload
          })
    }
})