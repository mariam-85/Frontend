import React, { useEffect, useState } from 'react'
import { getProduct } from '../../requests/product'
import { useParams } from 'react-router-dom'

export default function ProductDescr() {

    const [ product, setProduct ] = useState({});

     const { id } = useParams();

     useEffect(() => {
         getProduct(id, setProduct);
     }, []);

  return (
    <div>ProductDescr</div>
  )
}
