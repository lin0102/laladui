import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const root = document.getElementById('root');

class Prompt extends React.Component {
    constructor() {
        super();
        this.el = document.createElement('div');
    }

    componentDidMount() {
        root.appendChild(this.el);
    }

    componentWillUnmount() {
        root.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <div className='prompt'>
                <div className='prompt-box'>
                    <div>
                        投票<br/>{this.props.text}
                    </div>
                    <div onClick={this.props.closeSelf}>
                        确定
                    </div>
                </div> 
                <div className='prompt-close' onClick={this.props.closeSelf}></div>
            </div>,
            this.el
        );
    }
}
export default Prompt;
