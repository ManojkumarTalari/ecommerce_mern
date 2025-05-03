import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from '../components/ProductItem';


const RelatedProducts = ({catergory,subCatergory,id}) => {

    const {products}=useContext(ShopContext);
    const [related,setRelated]=useState([]);
    
    useEffect(()=>{
        if(products.length>0){
            let productsCopy=products.slice();
            productsCopy=productsCopy.filter((item)=>(catergory===item.catergory && item._id !==id));
            productsCopy=productsCopy.filter((item)=>subCatergory===item.subCatergory  && item._id !==id);
            setRelated(productsCopy.slice(0,5));
        }
    },[])
  return (
    <div className='my-24'>
       <div className='text-center text-xl py-2'>
         <Title text1={'RELATED'} text2={'PRODUCTS'}/>
       </div>
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
       </div>
    </div>
  )
}

export default RelatedProducts
