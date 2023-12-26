import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import Productcard from '../components/Productcard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner py-3 position-relative gap-10">
                <img src="images/main-banner-1.jpg" className='img-fluid  rounded-3' alt="main-banner" />
                <div className="main-banner-containt position-absolute">
                  <h4>SUPER CHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 <br />or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between  align-items-center">
                <div className="small-banner position-relative">
                  <img src="images/catbanner-01.jpg" className='img-fluid  rounded-3' alt="main-banner" />
                  <div className="small-banner-containt position-absolute">
                    <h4>NEW ARRIVAL.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner  position-relative">
                  <img src="images/catbanner-02.jpg" className='img-fluid  rounded-3' alt="main-banner" />
                  <div className="small-banner-containt position-absolute">
                    <h4>NEW ARRIVAL.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-03.jpg" className='img-fluid  rounded-3' alt="main-banner" />
                  <div className="small-banner-containt position-absolute">
                    <h4>NEW ARRIVAL.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img src="images/catbanner-04.jpg" className='img-fluid  rounded-3' alt="main-banner" />
                  <div className="small-banner-containt position-absolute">
                    <h4>NEW ARRIVAL.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 <br />or $41.62/mo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="service d-flex  align-items-center  justify-content-between">
                <div className='d-flex  align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all order over $100</p>
                  </div>
                </div>
                <div className='d-flex  align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex  align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex  align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Price</h6>
                    <p className='mb-0'>Get Factory direct price</p>
                  </div>
                </div>
                <div className='d-flex  align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap  justify-content-between  align-items-center">
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10  Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='Featured-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Feature Collection</div>
            </div>
          </div>
          <div className="row">
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card ">
                <div className="famous-content text-center">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Seriece 7</h6>
                  <p>From $399 or $16.62/mo, for 24 mo.*</p>
                </div>
                <img src="images/famous-2.png" className='img-fluid w-100 pt-5' alt="famous-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card ">
                <div className="famous-content text-center">
                  <h5>Studio Display</h5>
                  <h6>600 nits of brightness</h6>
                  <p>27-inc 5K Retina Display</p>
                </div>
                <img src="images/famous-3.png" className='img-fluid w-100 pt-5' alt="famous-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card ">
                <div className="famous-content text-center">
                  <h5>Smart Phones</h5>
                  <h6>Smart Phones 13 Pro</h6>
                  <p>Now in Green, From $999.00 or $41.62/mo. for 24 mo Footnote*</p>
                </div>
                <img src="images/famous-4.png" className='img-fluid w-100 pt-5' alt="famous-1" />
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card ">
                <div className="famous-content text-center">
                  <h5>Home Speekers</h5>
                  <h6>Room Filling sound</h6>
                  <p>From  $599 or $110.58/mo. for 12 mo.*</p>
                </div>
                <img src="images/famous-5.png" className='img-fluid w-100 pt-5' alt="famous-1" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="popular-wrapper home-wrappper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className='Featured-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our popular products</div>
            </div>
          </div>
          <div className="row">
            <Productcard />
            <Productcard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marqee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25'>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className='mx-4 w-25'>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Latest Blogs</div>
            </div>
            <div className="col-3 mt-3">
              <BlogCard />
            </div>
            <div className="col-3 mt-3">
              <BlogCard />
            </div>
            <div className="col-3 mt-3">
              <BlogCard />
            </div>
            <div className="col-3 mt-3">
              <BlogCard />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home
