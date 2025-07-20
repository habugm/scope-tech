
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
function Home() {
  return (
    <>
      <div style={{backgroundColor:'#1b2a30ff'}}>
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
        <h2 className="display-7 text-uppercase mb-1" style={{color:'white'}}>Mobile Products</h2>
      </div>
      <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto' }} />
      
      {/* Start of Grid */}
      <div className="row">
        {/* Product Item */}
        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item1.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 10</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item2.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 11</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item2.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 12</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item4.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 13</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



       <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item5.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 14</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


<div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item1.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 15</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


      </div>
      {/* End of Grid */}
    </div>
  </div>
</section>



   <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
 
<section id="smart-watches" className="product-store position-relative padding-large no-padding-top" style={{ paddingBottom: '20px', paddingTop: '10px' }}>
  <div className="container">
    <div className="row">
      <div className="display-header d-flex justify-content-center pb-0">
        <h2 className="display-7 text-uppercase mb-1" style={{color:'white'}}>Smart Watches</h2>
      </div>
      <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto' }} />
      
      {/* Start of Grid */}
      <div className="row">
        {/* Product Item */}
        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item6.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 10</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item7.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 11</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item8.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 12</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item9.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 13</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



       <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item10.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 14</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


<div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/product-item6.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 15</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


      </div>
      {/* End of Grid */}
    </div>
  </div>
</section>
  
<div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto' }} />
      
<section id="earphones" className="product-store position-relative padding-large no-padding-top" style={{ paddingBottom: '20px', paddingTop: '10px' }}>
  <div className="container">
    <div className="row">
      <div className="display-header d-flex justify-content-center pb-0">
        <h2 className="display-7 text-uppercase mb-1" style={{color:'white'}}>Earphones</h2>
      </div>
      <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto' }} />
      
      {/* Start of Grid */}
      <div className="row">
        {/* Product Item */}
        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone1.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 10</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



        <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone2.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 11</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone3.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Iphone 12</h5>
      <p className="mb-2" style={{color:'white'}}>64GB - Space Gray</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



      <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone4.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Gaming Earphones</h5>
      <p className="mb-2" style={{color:'white'}}>Cosmic Byte - Black</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>



       <div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone5.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Bluetooth Earphone</h5>
      <p className="mb-2" style={{color:'white'}}>Earldom ET - BH75</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


<div className="col-6 col-lg-3 mb-4">
  <div className="product-card position-relative">
    <div className="image-holder">
      <img src="images/earphone6.jpg" alt="product-item" className="img-fluid" />
    </div>

    {/* Blue box containing all details */}
    <div className="card-body text-center text-white" style={{
      backgroundColor: '#0E87CC',
      padding: '1rem',
      borderRadius: '0 0 10px 10px' // rounded bottom corners
    }}>
      <h5 className="card-title text-uppercase mb-2">Bluetooth Earphone</h5>
      <p className="mb-2" style={{color:'white'}}>Touch LED - Wireless</p>
      <Link to="/productItem1" className="item-price" style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '10px'
      }}>
        Detail
      </Link>
    </div>
  </div>
</div>


      </div>
      {/* End of Grid */}
    </div>
  </div>
</section>

   
 
  
  <div className="container py-5"  style={{color:'white'}}>
      <h2 className="text-center mb-4">Our Shop Location</h2>

      {/* Shop Info */}
      <div className="text-center mb-4">
        <h5 className="mb-1">SCOPE Mobile Store</h5>
        <p className="mb-0">Mekelle, Tigray, Ethiopia</p>
        <p>Phone: +251 945 51 38 93</p>
      </div>

      {/* Google Maps Embed */}
      <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.818089310909!2d39.469633274146176!3d13.48530430340965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd79b5c50ddf%3A0xa01f04a03fa5eab!2sScope%20Tech!5e0!3m2!1sen!2set!4v1753009122898!5m2!1sen!2set"
          allowFullScreen
          loading="lazy"
          title="Shop Location"
          style={{ border: 0 }}
        ></iframe>
      </div>
    </div>
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

</div>

    </>
  );
}

export default Home;
