import React, {useState, useEffect} from 'react'
import {BsChevronRight} from 'react-icons/bs'
import ProductPart from '../ProductPart'
import './index.css'

const ProductsSection = () => {
  const [productData, setProductData] = useState([])
  // const []

  const getData = async () => {
    const response = await fetch(
      'https://run.mocky.io/v3/12531624-c691-4a5b-9625-4490a7cff00d',
    )
    const data = await response.json()
    setProductData(data.categories)
    console.log(data.categories)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(productData)

  if (productData.products !== []) {
    return (
      <div className="products_sec">
        {productData.map(e => (
          <ProductPart similarProd={e} />
        ))}
      </div>
      // <div>hello</div>
    )
  }
  return <div>Loading</div>
}

export default ProductsSection
