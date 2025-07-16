import React from 'react';

function Footer() {
  return (
    <>
     <div
  style={{
    backgroundColor: '#0E87CC',
    paddingTop: '10px',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    zIndex: 1000,
  }}
>
  <footer id="footer" className="overflow-hidden py-2">
  <div className="container">
    <div className="row">
      <div className="footer-top-area py-2"> {/* Reduce vertical spacing */}
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-3 col-sm-6 pb-1"> {/* Reduce padding-bottom */}
            <div className="footer-menu">
              <div className="social-links">
                <ul className="d-flex list-unstyled gap-2 mb-1"> {/* Tighten spacing between icons */}
                  <li><a href="#"><svg className="facebook"><use xlinkHref="#facebook" /></svg></a></li>
                  <li><a href="#"><svg className="instagram"><use xlinkHref="#instagram" /></svg></a></li>
                  <li><a href="#"><svg className="twitter"><use xlinkHref="#twitter" /></svg></a></li>
                  <li><a href="#"><svg className="linkedin"><use xlinkHref="#linkedin" /></svg></a></li>
                  <li><a href="#"><svg className="youtube"><use xlinkHref="#youtube" /></svg></a></li>
                </ul>
              </div>
            </div>
          </div>

  <div className="col-lg-3 col-sm-6 pb-1">
            <div className="footer-menu contact-item">
              
              <a href="mailto:naodanhna@gmail.com" style={{color:'white'}}>Email: naodanhna@gmail.com</a>
              
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 pb-1">
            <div className="footer-menu contact-item">
              <p className="mb-0" style={{color:'white'}}>+251945513893</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr className="my-1" />
</footer>

  
</div>


      
    </>
  );
}

export default Footer;
