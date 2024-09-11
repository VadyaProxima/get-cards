import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
          <Link to="/products">Product List</Link>
          <Link to="/create-product">Create Product</Link>
        </nav>
  )
}

export default Nav