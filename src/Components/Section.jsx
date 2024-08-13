import React from 'react'
import CartPage from './CartPage'



function Section() {
  
  return (
  <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col"> 
            <h2 style={{textAlign:'center'}}>Cart</h2> 
             <CartPage />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Section