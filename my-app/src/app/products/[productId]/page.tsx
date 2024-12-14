import { Metadata } from "next"

export const  metadata:Metadata ={
    title:"Products"

}

export default function ProductDetails({params}:{
    params:{productId:string}
}){
    return <h1>Product details of {params.productId}</h1>
}