import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { CartProduct } from '../pages/Product';
type CartAction={
    price:number;
    product:CartProduct
    
}
type State={
    quantity:number;
    total:number;
    products:CartProduct[]
}

type InitialState={
    quantity:number;
    total:number;
    products:CartProduct[]
}
const initialState:InitialState={
    quantity:0,
    total:0,
    products:[]
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state:State,action:PayloadAction<CartAction>)=>{
            state.quantity+=1
            state.total+=action.payload.price
            state.products.push(action.payload.product)
        }
    }
})
export const {addItem}=cartSlice.actions
export default cartSlice.reducer