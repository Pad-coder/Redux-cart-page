import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE,Updatequantity } from '../Redux/CardSlice'
import PriceTotal from './PriceTotal'

function CartPage() { 
  const cart = useSelector(state=> state.cart.cart)
  const item = useSelector(state=> state.cart.quantity)
  const dispatch = useDispatch();
  
 
  const UpdateQuantity=(id,quantity)=>{
    
        dispatch(Updatequantity({ id:id, quantity: parseInt(quantity) }));
  }
  

  // const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return <> <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="h2">
                        Shopping Bag
                      </th>
                      <th scope="col">Description</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
             
              {cart.length === 0 ? 
                <div><h2>Cart is Empty</h2></div>
              :
                cart.map((e,i)=>{
                  return  <tbody key={i}>
                  <tr >
                    <th scope="row">
                      <div className="d-flex align-items-center">
                        <img
                          src={e.image}
                          className="img-fluid rounded-3"
                          style={{ width: 120 }}
                          alt={e.image===200? e.title:"Image file not found"}
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2" style={{fontSize:'13px', width:'100%'}}>{e.title}</p>
                          
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: '500', margin:'0 20px 0 20px' }}>
                        {e.description}
                      </p>
                    </td>
                    <td className="align-top">
                      <div className="d-flex flex-row">
                      <select
                   name="Quantity"
                   id="Quantity"
                   value={e.quantity}
                   onChange={(q)=>UpdateQuantity(i,q.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0" style={{ fontWeight: 500 }}>
                        ${e.price}
                      </p>
                      <br />
                      <button className="btn btn-dark" onClick={()=>dispatch(REMOVE(e.id))}>Remove</button>
                    </td>
                  </tr>
                </tbody>
                })
              }
                 
                </table>

                {/* This is total and sub-total area */}

                <div className="card shadow-2-strong mb-5 mb-lg-0"style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                  <div className="row" style={{ justifyContent: "right" }}>
                    <div className="col-lg-4 col-xl-3">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">${item}</p>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">Free</p>
                      </div>
                      <hr className="my-4" />
                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Total</p>
                        <p className="mb-2">$</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </>
}

export default CartPage;
