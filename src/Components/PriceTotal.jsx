import React from 'react'

function PriceTotal() {

  return <>
   <div className="card shadow-2-strong mb-5 mb-lg-0"style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                  <div className="row" style={{ justifyContent: "right" }}>
                    <div className="col-lg-4 col-xl-3">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$$</p>
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
                        <p className="mb-2">Total (tax included)</p>
                        <p className="mb-2">$$</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  </>
}

export default PriceTotal