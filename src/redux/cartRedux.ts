import { createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ProductProps } from '../components/Product';
type CartAction={
    price:number;
    product:ProductProps
}
type State={
    quantity:number;
    total:number;
    products:ProductProps[]
}
const cartSlice=createSlice({
    name:'cart',
    initialState:{
        quantity:0,
        total:0,
        products:[]
    },
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