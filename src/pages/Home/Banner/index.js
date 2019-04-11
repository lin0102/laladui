import React from 'react';
import './index.scss'
import store from '../../../redux/store';
import leftTop from './image/leftTop.png'
import leftBottom from './image/leftBottom.png'
import rightTop from './image/rightTop.png'
import lightLeft from './image/lightLeft.png'
import lightRight from './image/lightRight.png'

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: store.getState().sum
        }
        this.unsubscribe = function(){}
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(this.listener);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    PrefixInteger(num, length) {
        return (Array(length).join('0') + num).slice(-length);
    }
    listener = () => {
        this.setState({sum: store.getState().sum});
    }
    render() {
        let disUpgrade = 2019 - this.state.sum % 2019;
        disUpgrade = this.PrefixInteger(disUpgrade, 4);
        let level = Math.floor(this.state.sum / 2019);
        return (
            <div className='banner'>
                <img src={lightLeft} alt=""/>
                <img src={lightRight} alt=""/>
                <img src={leftTop} alt=""/>
                <img src={leftBottom} alt=""/>
                <img src={rightTop} alt=""/>
                <div className='total-vote'>
                    <div>{disUpgrade[0]}</div>
                    <div>{disUpgrade[1]}</div>
                    <div>{disUpgrade[2]}</div>
                    <div>{disUpgrade[3]}</div>
                    <div>票</div>
                </div>
                <p className='level'>当前等级：{level}</p>
            </div>
        );
    }
}

export default Banner;
