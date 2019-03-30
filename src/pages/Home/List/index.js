import React from 'react';
import './index.scss'
import points from './image/points.png'
import hand from './image/hand.png'
import voteButton from './image/voteButton.png'
import votedButton from './image/votedButton.png'

export default class List extends React.Component {
    render() {
        const i = this.props.value;
        const styles = i % 2
        ? {
            listStyle: {
                borderImage: "linear-gradient(#f7aa98 0, #f7aa98 25%,#fca6b0 25%, #fca6b0 100%) 0 3 round"
            },
            handStyle: {
                transform: "scale(-1, 1)",
                right: "-2vw",
            }
        }
        : {
            listStyle: {
                borderImage: "linear-gradient(#fca6b0 0, #fca6b0 25%,#f7aa98 25%, #f7aa98 100%) 0 3 round"
            },
            handStyle: {
                left: "-2vw",
            }
        }

        return (
        <div className='List' style={styles.listStyle}>
            <div className='listContent'>
                <div>
                    <div>{this.props.listState.votes}票</div>
                </div>
                <div>
                    <h3>计算机科学与技术学院</h3>
                    <p>他们风采飞扬，英勇无比，是运动场上的健儿</p>
                    <div 
                    style={{
                        backgroundImage: this.props.listState.haveVote 
                        ? `url(${votedButton})` 
                        : `url(${voteButton})`
                    }}
                    onClick={() => this.props.vote()}
                    >{this.props.listState.haveVote ? "已投" : "投票"}</div>
                </div>
            </div>
            <img src={hand} alt="" style={styles.handStyle}/>
            <img src={points} alt=""/>
        </div>
    );
    }
}
