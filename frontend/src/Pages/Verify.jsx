import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Verify = () => {

    const { navigate, token, setCartItems,backendUrl } = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
   try {
    if (!token) {
        return null
    } else {
         const response=await axios.post(backendUrl+'/api/order/verifyStripe',{success,orderId},{headers:{token}})
         
         if(response.data.success){
            setCartItems({})
            navigate('/orders')
            toast.success(response.data.message)
         }else{
            navigate('/cart')
            toast.error(response.data.message)
         }
        }

   } catch (error) {
    console.log(error);
    toast.error(error)
    
   }
    }
    useEffect(()=>{
        verifyPayment();
    },[token])


    return (
        <div>

        </div>
    )
}

export default Verify
