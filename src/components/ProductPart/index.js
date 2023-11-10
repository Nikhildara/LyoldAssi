import React, {useContext} from 'react'
import {BsChevronRight} from 'react-icons/bs'
import Context from '../Context'

const ProductPart = props => {
  const {similarProd} = props
  const {name, products} = similarProd
  const context = useContext(Context)
  const {cart, addCart, removeCart} = context

  const toCart = id => {
    // const isPresent = cart.some(e => id === e.id)
    // if (isPresent !== true) {
    // }
  }

  return (
    <div className='product_part'>
      <div className='pro-head-viewALL'>
        <div className='heading-con'>
          <h1 className='pro_head'>{name}</h1>
          <BsChevronRight className='right' />
        </div>
        <p className='viewAll'>View all</p>
      </div>
      <ul className='products_list'>
        {products.map(e => (
          <li onClick={() => toCart(e.id)}>
            <img src={e.image} className='product_image' />
            <p className='cost'>{e.price}</p>
            <p className='prod_name'>{e.name}</p>
            <p className='prod_wei'>{e.weight}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default ProductPart
