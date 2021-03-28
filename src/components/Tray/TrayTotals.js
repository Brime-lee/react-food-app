import React from 'react';
import { Link } from 'react-router-dom';

function TrayTotals({ value }) {
    const { cartDelivery, cartTotal, clearCart } = value;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to='/tray'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>clear tray</button>
                        </Link>
                        <h5>
                            <span className="weight-font-bold">
                                delivery fee : <span>
                                    <strong>{"\u20A6"} {cartDelivery}</strong>
                                </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="weight-font-bold">
                                Total : <span>
                                    <strong>{"\u20A6"} {cartTotal}</strong>
                                </span>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TrayTotals;