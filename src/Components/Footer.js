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
  <footer id="footer" className="overflow-hidden">
    <div className="container">
      <div className="row">
        <div className="footer-top-area">
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-3 col-sm-6 pb-3">
              <div className="footer-menu">
                
                <div className="social-links">
                  <ul className="d-flex list-unstyled">
                    <li>
                      <a href="#">
                        <svg className="facebook">
                          <use xlinkHref="#facebook" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="instagram">
                          <use xlinkHref="#instagram" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="twitter">
                          <use xlinkHref="#twitter" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="linkedin">
                          <use xlinkHref="#linkedin" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg className="youtube">
                          <use xlinkHref="#youtube" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pb-3">
              <div className="footer-menu contact-item">
                <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                <a href="mailto:naodanhna@gmail.com">naodanhna@gmail.com</a>
                <p>Give us a call on. +251945513893</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </footer>
  <div id="footer-bottom" />
</div>


      
    </>
  );
}

export default Footer;
