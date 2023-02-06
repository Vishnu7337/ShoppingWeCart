import logoItem from '../logo.svg';
import './Styles/product.css'
 
const Product=(props)=>{
    return(
    <>
    {/* This is product Container */}
    <div className="Product_Container">
        <div>
        <img src={logoItem}  className="Img-container"></img>

        </div>
        <div>
            ProductId:{props.data.id}
        </div>
        <div>
            <span>{props.data.price}</span>
            <small>
                <strike>{props.data.discountedPrice}</strike>
            </small>
        </div>

    </div>
    </>
    )
}
export default Product;