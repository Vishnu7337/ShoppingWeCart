import ListItem from "./ListItem";
import Product from "./Product";
import './Styles/Listitem.css'
import './Styles/productList.css'

const ProductList=()=>{
    const data=[{
        id:1,
        price:123,
        discountedPrice:99,
        title:"Product A"
    },{
        id:2,
        price:341,
        discountedPrice:300,
        title:"Product B"

    },{
        id:3,
        price:390,
        discountedPrice:69,
        title:"Product C"

    },{
        id:4,
        price:123,
        discountedPrice:199,
        title:"Product D"

    },{
        id:5,
        price:1233,
        discountedPrice:999,
        title:"Product E"

    }
]
    return(
        <>
        <div className="ProductsContainer">
       
        <Product data={data[0]}></Product>
        <Product data={data[1]}></Product>
        <Product data={data[2]}></Product>
        <Product data={data[3]}></Product>
        <Product data={data[4]}></Product>
        </div>
        </>
    )
}
export default ProductList;