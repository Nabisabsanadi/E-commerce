import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import Meta from './Meta'
import Mycolor from '../components/Mycolor'
const CompareProduct = () => {
    return (
        <>
            <Meta title={"Compare products"} />
            <BreadCrumbs title=" Compare products" />
            <div className="compare-product-wrapper py-5 home-wrrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid'/>
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h6 className="title">
                                        Lorem ipsum dolor sit amet . 
                                    </h6>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div className="product-detail">
                                        <h6>Brand</h6>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Type</h6>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Availablity</h6>
                                        <p>In  stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Color</h6>
                                       <Mycolor/>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Size</h6>
                                        <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid'/>
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h6 className="title">
                                        Lorem ipsum dolor sit amet . 
                                    </h6>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div className="product-detail">
                                        <h6>Brand</h6>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Type</h6>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Availablity</h6>
                                        <p>In  stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Color</h6>
                                       <Mycolor/>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Size</h6>
                                        <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid'/>
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h6 className="title">
                                        Lorem ipsum dolor sit amet . 
                                    </h6>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div className="product-detail">
                                        <h6>Brand</h6>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Type</h6>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Availablity</h6>
                                        <p>In  stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Color</h6>
                                       <Mycolor/>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Size</h6>
                                        <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="crosss" className='position-absolute cross img-fluid'/>
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="watch" />
                                </div>
                                <div className="compare-product-details">
                                    <h6 className="title">
                                        Lorem ipsum dolor sit amet . 
                                    </h6>
                                    <h6 className="price mb-3">$ 100</h6>
                                    <div className="product-detail">
                                        <h6>Brand</h6>
                                        <p>Havels</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Type</h6>
                                        <p>Watch</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Availablity</h6>
                                        <p>In  stock</p>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Color</h6>
                                       <Mycolor/>
                                    </div>
                                    <div className="product-detail">
                                        <h6>Size</h6>
                                        <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>XL</p>
                                        <p>XXL</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct
