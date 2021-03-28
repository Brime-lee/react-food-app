import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';


class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/** title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5" style={{ color: "#232528" }}>
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            {/** title end */}
                            {/** product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="meal" />
                                </div>
                                {/**product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize" style={{ color: "#232528" }}>
                                    <h3>Delicacy : {title}</h3>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        from : <span className="text-uppercase">{company}</span>
                                    </h4>
                                    <h4 className="text-yellow">
                                        <strong>
                                            price : <span>{"\u20A6"} {price}</span>
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold my-3 mb-0">
                                        some info about the meal:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/**buttons */}
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>
                                                back to delicacies
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            tray
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToTray(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inTray" : "add to tray"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                }
            </ProductConsumer >
        );
    }
}

export default Details;