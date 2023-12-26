import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
const Productcard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                {/* <div className="col-3"> */}
                <div className="product-card position-relative shadow-sm">
                    <div className="wishlist-icon  position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wish" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                        <img src="images/watch-1.jpg" className='img-fluid' alt="product image" />
                    </div>
                    <div className="prodduct-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">Kids headphone bulk 10 pack multi colored for students</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`discription ${grid==12 ? "d-block" : "d-none"}`}>Lorem ipsum dolo quos tenetur incidunt doloremque iust</p>

                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="add-cart" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
            <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
                {/* <div className="col-3"> */}
                <div className="product-card position-relative  shadow-sm">
                    <div className="wishlist-icon  position-absolute">
                        <Link>
                            <img src="images/wish.svg" alt="wish" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img src="images/watch.jpg" className='img-fluid' alt="product image" />
                        <img src="images/watch-1.jpg" className='img-fluid' alt="product image" />
                    </div>
                    <div className="prodduct-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">Kids headphone bulk 10 pack multi colored for students</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`discription ${grid==12 ? "d-block" : "d-none"}`}>Lorem ipsum dolo quos tenetur incidunt doloremque iust</p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src="images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="view" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="add-cart" />
                            </Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>

        </>
    )
}

export default Productcard
