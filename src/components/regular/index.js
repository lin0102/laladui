import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const root = document.getElementById('root');

class Regular extends React.Component {
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
            <div className='regular'>
                <div>
                    <article>
                        <h3>助力啦啦队活动规则</h3>
                        <p>（因网络原因，总票数刷新时间会有一定延迟，投票后可稍后查看）</p>
                        <p>他们是舞者，在乐声响起的那一刻，来自13个学院的啦啦队队员们，充满活力，用整齐的身姿，在广阔绿茵里舞出运动的旋律，绽放属于他们的光彩。快来“助力啦啦队”，因为有你，才更精彩！</p>
                        <p>以下是《助力啦啦队》的规则方法：</p>
                        <p>1.得分规则<br />总分=本学院参加校运会同学的投票率*1000+非本学院投票数*10</p>
                        <p>2.冲榜规则<br />全校投票数累积，每增加2019票，多增加一人进行抽奖，活动结束后，根据实时投票数，抽取幸运参与者发放腾讯s8运动手环。</p>
                        <p>3. 每人每天有5次投票机会，每次可为1支啦啦队助力。</p>
                        <p>4.当日未使用的助力机会不可累加至次日，当日24点自动清空。</p>
                        <p>5.本次助力时间为2019年4月11日8:00——4月12日19:00</p>
                    </article>
                </div>
                <div onClick={this.props.closeRegular}></div>
            </div>,
            this.el
        );
    }
}
export default Regular;