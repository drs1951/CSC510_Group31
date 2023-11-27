

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCode from 'qrcode.react';



class Job2 extends Component {

  render() {
    const { job } = this.props;
    const { menu, order } = this.props;
    const { user } = this.props.auth;

    const { isLoggedIn } = this.props.auth;
    const paypalUsername = 'atharv47';
    const paypalPaymentLink = `https://www.paypal.me/${paypalUsername}/${order.Ordercost}`;
    

    return (

      <div className="post" style={{ width: '50vw', marginLeft: '50px' }}>
        {1 > 0 ?
          <div className="post-header">



            {/* <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Dish : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.menuname}</span>
                  </div> */}

            <div >

              <h4 style={{ display: 'inline-block', marginTop: '-12px' }}>Order Id : </h4>
              <span style={{ marginLeft: '10px' }}>{order._id} </span>
              <h4 style={{ display: 'inline-block', marginTop: '-12px', marginLeft: '25px' }}> Cost : </h4>
              <span style={{ marginLeft: '10px' }}>{order.Ordercost} </span>

            </div>
            <div>
              <QRCode value={paypalPaymentLink} />
            </div>


            <div >
              <h4 style={{ display: 'inline-block', marginTop: '-12px' }}>Item Ordered</h4>
              <div className='ingredient_container'>
                <div className='ingredient_tab'>
                  <div className='field'>
                    <span style={{ marginLeft: '10px', fontWeight: "bold" }}>No</span>
                  </div>
                  <div className='field'>
                    <span style={{ marginLeft: '10px', fontWeight: "bold" }}>Name</span>
                  </div>
                  <div className='field'>
                    <span style={{ marginLeft: '10px', fontWeight: "bold" }}>Quantity</span>
                  </div>
                </div>
                {
                  order.items.map((ingredient, index) => {
                    return (
                      <div className='ingredient_tab'>
                        <div key={index} className='field'>
                          <span style={{ marginLeft: '10px' }}>{index + 1}</span>
                        </div>
                        <div key={index} className='field'>
                          <span style={{ marginLeft: '10px' }}>{ingredient.item_id.menuname}</span>
                        </div>
                        <div key={index} className='field'>
                          <span style={{ marginLeft: '10px' }}>{ingredient.quantity}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>




          </div> : []}
      </div>
    );
  }
}

function mapStateToProps({ auth, job, application }) {
  return {
    auth,
    application,


  };
}

export default connect(mapStateToProps)(Job2);


