import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import fontBox from './image/font-box.png';
import fontBox2 from './image/font-box2.png';

const root = document.getElementById('root');

class Prompt extends React.Component {
    constructor() {
        super();
        this.el = document.createElement('div');
    }

    componentDidMount() {
        root.style.height = "100vh";
        root.style.overflow = "hidden";
        root.appendChild(this.el);
    }

    componentWillUnmount() {
        root.style.height = "";
        root.style.overflow = "";
        root.removeChild(this.el);
    }

    render() {
        const box = this.props.text === "成功" ? fontBox : fontBox2;
        return ReactDOM.createPortal(
            <div className='prompt'>
                <div className='prompt-box'>
                    <div style={{background:`url(${box})`,backgroundSize: "100%"}}>
                        投票<br/>{this.props.text}
                    </div>
                    <div onClick={this.props.closeSelf}>
                        确定
                    </div>
                </div> 
            </div>,
            this.el
        );
    }
}
export default Prompt;
