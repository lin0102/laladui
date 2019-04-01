import React from 'react';
import './index.scss'
import store from '../../../redux/store';

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: store.getState().sum
        }
    }
    componentDidMount() {
        store.subscribe(this.listener);
    }
    PrefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
    listener = () => {
        this.setState({sum: store.getState().sum});
    }
    render() {
        let disUpgrade = 1000 - this.state.sum % 1000;
        disUpgrade = this.PrefixInteger(disUpgrade, 4);

        return (
            <div className='banner'>
                <div className='total-vote'>
                    <div>{disUpgrade[0]}</div>
                    <div>{disUpgrade[1]}</div>
                    <div>{disUpgrade[2]}</div>
                    <div>{disUpgrade[3]}</div>
                    <div>票</div>
                </div>
            </div>
        );
    }
}

export default Banner;
