import React, { useState } from 'react'
import BreadCrumbs from './BreadCrumbs'
import Meta from './Meta'
import ReactStars from "react-rating-stars-component";
import Productcard from './../components/Productcard';
const Ourstore = () => {
  const [grid, setGrid]=useState(4);
  // alert(grid);
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumbs title="Our Store" />
      <div className="store-wrapper home-wrappar-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Shop By  Categories</h3>
                <ul   className='ps-0'>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="" id='' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>In Stock (1)</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" value="" id='' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>Out of Stock</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex  align-items-center gap-10">
                    <div className="mb-3 form-floating">
                      <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="mb-3 form-floating">
                      <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <ul className='colors ps-0'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="colors-1" id='colors-1' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>S [2]</label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="colors-2" id='colors-2' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>S [2]</label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="colors-2" id='colors-2' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>M [2]</label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="colors-2" id='colors-2' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>XL [2]</label>
                    </div>
                  </div>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" value="colors-2" id='colors-2' className='form-check-input' />
                      <label htmlFor="" className='form-check-lable'>XXL [2]</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Oppo
                    </span>
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Speaker
                    </span>
                    <span className="badge  text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>

                  </div>
                </div>
              </div>
              <div className='filter-card mb-3'>
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-product d-flex mb-3">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="image" className="img-fluid" />
                    </div>
                    <div className="w50 px-3">
                      <h6>Kids headphones bulk 10pack multi colored for students</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 100</b>
                    </div>
                  </div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" alt="image" className="img-fluid" />
                    </div>
                    <div className="w50 px-3">
                      <h6>Kids headphones bulk 10pack multi colored for students</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>$ 100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid MB-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className='mb-0' style={{ width: "100px" }}>Sort By:</p>
                    <select name="" id="" className='form-select form-control'>
                      <option value="">Featured</option>
                      <option value="">Alphabetically, A-Z</option>
                      <option value="">Alphabetically, Z-A</option>
                      <option value="">Price low to hiegh</option>
                      <option value="">Price hiegh to low </option>
                      <option value="">Date new to old</option>
                      <option value="">Date old to new</option>
                    </select>
                  </div>
                  <div className="d-flex  align-items-center gap-10">
                    <p className="totalproducs mb-0">21 Products</p>
                    <div className="d-flex    gap-10  align-items-center grid ">
                      <img onClick={()=>{setGrid(4);}} src="images/gr4.svg" alt="grid" className="d-block  img-fluid" />
                      <img onClick={()=>{setGrid(3);}} src="images/gr3.svg" alt="grid" className="d-block  img-fluid" />
                      <img onClick={()=>{setGrid(2);}} src="images/gr2.svg" alt="grid" className="d-block  img-fluid" />
                      <img onClick={()=>{setGrid(1);}} src="images/gr.svg" alt="grid" className="d-block  img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              <Productcard grid={grid}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ourstore
