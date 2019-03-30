import React from 'react';
import './index.scss';
import Carousel from '../../components/carousel'

export default class Detail extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='detail'>
                <div className='detail-head'>
                    <Carousel></Carousel>
                </div>
                <div className='detail-tag'>
                    <div className='tag-left'>
                        <p className='tag-institute'>计算机科学与技术学院</p>
                        <div>
                            <p>可爱</p>
                            <p>活力</p>
                            <p>穿着品如的衣服</p>
                        </div>
                    </div>
                    <div className='tag-right'>
                        <div>323分</div>
                        <div>3233票</div>
                    </div>
                </div>
                <p>
                    队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。
                </p>
                <div className='detail-button'>投票</div>
            </div>
        )
    }
}
 