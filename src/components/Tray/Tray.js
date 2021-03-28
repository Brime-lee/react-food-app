import React, { Component } from 'react';
import Title from '../Title';
import TrayColumns from './TrayColumns';
import EmptyTray from './EmptyTray';
import { ProductConsumer } from '../../Context';
import TrayList from './TrayList';
import TrayTotals from './TrayTotals';

class Tray extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Tray" />
                                    <TrayColumns />
                                    <TrayList value={value} />
                                    <TrayTotals value={value} />
                                </React.Fragment>
                            )
                        }
                        else {
                            return <EmptyTray />
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Tray;