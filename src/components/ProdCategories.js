import React from 'react'
// import PropTypes from 'prop-types'
import Cards from './Cards'

function ProdCategories(props) {
  return (
    <div>
      <div className="card-contain flex flex-wrap  justify-center">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default ProdCategories

