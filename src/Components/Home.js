
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
function Home() {
  return (
    <>
      <div>
  <section id="billboard" class="position-relative overflow-hidden bg-light-blue">
  <div class="swiper main-swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <div class="banner-content">
                <button class="btn btn-medium btn-primary text-uppercase btn-rounded-none" disabled>SCOPE TECH ( NAOD )</button>

                <h1 class="display-2 text-uppercase text-dark pb-5">Your One-Stop Mobile Destination</h1>
                
              </div>
            </div>
            <div class="col-md-5">
              <div class="image-holder">
                <img src="images/ab.jpg" alt="banner" />

              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </div>

  
</section>

  <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />

  <section id="mobile-products" className="product-store position-relative padding-large no-padding-top" style={{ paddingBottom: '20px', paddingTop: '10px' }}>
    <div className="container">
      <div className="row">
        <div className="display-header d-flex justify-content-center pb-0">
  <h2 className="display-7 text-uppercase mb-1">Mobile Products</h2>
</div>
<div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
        <Swiper
  modules={[Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
  style={{ paddingBottom: '60px' }}
  className="product-swiper"
>
  <SwiperSlide>
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src="images/product-item1.jpg" alt="product-item" className="img-fluid" />
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#">Iphone 10</a>
          
        </h3>
        <Link to="/productItem1" className='item-price' style={{
  padding: '0.5rem 1rem',
  backgroundColor: '#0E87CC',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 'bold'
}}>Detail</Link>
        
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src="images/product-item2.jpg" alt="product-item" className="img-fluid" />
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#">Iphone 11</a>
        </h3>
        <span className="item-price text-primary">60,000.00</span>
      </div>
    </div>
  </SwiperSlide>
<SwiperSlide>
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src="images/product-item3.jpg" alt="product-item" className="img-fluid" />
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#">Iphone 8</a>
        </h3>
        <span className="item-price text-primary">6,000.00</span>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src="images/product-item4.jpg" alt="product-item" className="img-fluid" />
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#">Iphone 13</a>
        </h3>
        <span className="item-price text-primary">80,000.00</span>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="product-card position-relative">
      <div className="image-holder">
        <img src="images/product-item5.jpg" alt="product-item" className="img-fluid" />
      </div>
      <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
        <h3 className="card-title text-uppercase">
          <a href="#">Iphone 12</a>
        </h3>
        <span className="item-price text-primary">65,000.00</span>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
    
      </div>
    </div>
    
  </section>
  <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
  <section id="smart-watches" className="product-store position-relative">
    <div className="container">
      <div className="row">
        <div className="display-header d-flex justify-content-center pb-3">
          <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
        </div>
        <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
        <div className="swiper product-watch-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-card position-relative">
                <div className="image-holder">
                  <img src="images/product-item6.jpg" alt="product-item" className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                  <div className="cart-button d-flex">
                    </div>
                </div>
                <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                  <h3 className="card-title text-uppercase">
                    <a href="#">Pink watch</a>
                  </h3>
                  <span className="item-price text-primary">8700.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card position-relative">
                <div className="image-holder">
                  <img src="images/product-item7.jpg" alt="product-item" className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                  <div className="cart-button d-flex">
                   </div>
                </div>
                <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                  <h3 className="card-title text-uppercase">
                    <a href="#">Heavy watch</a>
                  </h3>
                  <span className="item-price text-primary">6800.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card position-relative">
                <div className="image-holder">
                  <img src="images/product-item8.jpg" alt="product-item" className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                  <div className="cart-button d-flex">
                   </div>
                </div>
                <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                  <h3 className="card-title text-uppercase">
                    <a href="#">spotted watch</a>
                  </h3>
                  <span className="item-price text-primary">7500.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card position-relative">
                <div className="image-holder">
                  <img src="images/product-item9.jpg" alt="product-item" className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                  <div className="cart-button d-flex">
                   </div>
                </div>
                <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                  <h3 className="card-title text-uppercase">
                    <a href="#">black watch</a>
                  </h3>
                  <span className="item-price text-primary">6500.00</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-card position-relative">
                <div className="image-holder">
                  <img src="images/product-item10.jpg" alt="product-item" className="img-fluid" />
                </div>
                <div className="cart-concern position-absolute">
                  <div className="cart-button d-flex">
                    </div>
                </div>
                <div className="card-detail d-flex justify-content-between pt-3">
                  <h3 className="card-title text-uppercase">
                    <a href="#">black watch</a>
                  </h3>
                  <span className="item-price text-primary">7500.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-pagination position-absolute text-center" />
  </section>
  
   
  <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
          <div className="col-md-6 col-sm-12">
            <div className="display-header pe-3">
              <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
              <p>Get latest news, updates and deals directly mailed to your inbox.</p>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <form className="subscription-form validate">
              <div className="input-group flex-wrap">
                <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required />
                <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="instagram" className="padding-large overflow-hidden no-padding-top">
    <div className="container">
      <div className="row">
        <div className="display-header text-uppercase text-dark text-center pb-3">
          <h2 className="display-7">Shop Our Insta</h2>
        </div>
        <div className="d-flex flex-wrap">
          <figure className="instagram-item pe-2">
            <a href="https://templatesjungle.com/" className="image-link position-relative">
              <img src="images/insta-item1.jpg" alt="instagram" className="insta-image" />
              <div className="icon-overlay position-absolute d-flex justify-content-center">
                <svg className="instagram">
                  <use xlinkHref="#instagram" />
                </svg>
              </div>
            </a>
          </figure>
          <figure className="instagram-item pe-2">
            <a href="https://templatesjungle.com/" className="image-link position-relative">
              <img src="images/insta-item2.jpg" alt="instagram" className="insta-image" />
              <div className="icon-overlay position-absolute d-flex justify-content-center">
                <svg className="instagram">
                  <use xlinkHref="#instagram" />
                </svg>
              </div>
            </a>
          </figure>
          <figure className="instagram-item pe-2">
            <a href="https://templatesjungle.com/" className="image-link position-relative">
              <img src="images/insta-item3.jpg" alt="instagram" className="insta-image" />
              <div className="icon-overlay position-absolute d-flex justify-content-center">
                <svg className="instagram">
                  <use xlinkHref="#instagram" />
                </svg>
              </div>
            </a>
          </figure>
          <figure className="instagram-item pe-2">
            <a href="https://templatesjungle.com/" className="image-link position-relative">
              <img src="images/insta-item4.jpg" alt="instagram" className="insta-image" />
              <div className="icon-overlay position-absolute d-flex justify-content-center">
                <svg className="instagram">
                  <use xlinkHref="#instagram" />
                </svg>
              </div>
            </a>
          </figure>
          <figure className="instagram-item pe-2">
            <a href="https://templatesjungle.com/" className="image-link position-relative">
              <img src="images/insta-item5.jpg" alt="instagram" className="insta-image" />
              <div className="icon-overlay position-absolute d-flex justify-content-center">
                <svg className="instagram">
                  <use xlinkHref="#instagram" />
                </svg>
              </div>
            </a>
          </figure>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  );
}

export default Home;
