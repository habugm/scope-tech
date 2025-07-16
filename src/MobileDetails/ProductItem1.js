import React from 'react';

function ProductItem1() {
  return (
    <div style={{ padding: '6rem' }}>
      <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
      <h3 className="display-7 text-uppercase mb-4" style={{textAlign:'center'}}>Iphone 10</h3>
      <div style={{ height: '2px', width: '50%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
      <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem'
}}>
  <img
    src="images/ProductItem1/ProductItem1Detail1.jpg"
    alt="product-item-1"
    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
  />
  <img
    src="images/ProductItem1/ProductItem1Detail2.jpg"
    alt="product-item-2"
    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
  />
  <img
    src="images/ProductItem1/ProductItem1Detail3.jpg"
    alt="product-item-3"
    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
  />
</div>

      
      <h4 style={{textAlign:'center'}}>Specs..</h4>
      <div style={{ height: '2px', width: '100%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
       
       <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
        textAlign: 'center'
      }}>
        <h6>90% Battery</h6>
        <h6>8GB RAM</h6>
        <h6>256 ROM</h6>
      </div>
      <div style={{ height: '2px', width: '100%', backgroundColor: '#ADD8E6', margin: '10px auto'}} />
    </div>
  );
}

export default ProductItem1;
