import React, { Component } from 'react';
import Food from './Food';
import Title from './Title';
import { ProductConsumer } from '../Context';

class FoodList extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="">
                    <div className="container">
                        <Title name="tasty" title="meals" />
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map(product => {
                                        return <Food key={product.id} product={product} />

                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            //   <Food />

        );
    }
}

export default FoodList;