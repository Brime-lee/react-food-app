import React from 'react';

export default function TrayColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">meal</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">name of meal</p>
                </div> <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">price ({"\u20A6"}) </p>
                </div> <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">quantity</p>
                </div> <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">remove</p>
                </div> <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">total ({"\u20A6"})</p>
                </div>
            </div>
        </div>
    );
}

