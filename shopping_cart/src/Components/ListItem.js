import logoItem from '../logo.svg';

import './/Styles/Listitem.css'
const ListItem=(props)=>{
    console.log(props)
    const element=<div>Element is Rendered</div>
    return(

        <>
         <div classname="detailsContainer"> 

                      <div >
{/* style={{height:'10',width:'100px'}} */}
                        <img src={logoItem}  className="Img-container"></img>
                    </div>
                    <div>
                        <div><b>{props.data1.price}</b>
                        <span>
                        <small>
                            <strike>
                           {props.data1.discountedPrice}
                            </strike>
                        </small>
                        </span>
                        </div>
                        <div>
                          { props.data1.title}
                            
                                <img src={logoItem} style={{color:'red', width:'40px',height:'40px'}}></img>

                            
                        </div>
                    </div>

                    </div>
        
        </>
    )
}
export default ListItem;