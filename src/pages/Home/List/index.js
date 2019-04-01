import React from 'react';
import './index.scss'
import points from './image/points.png'
import hand from './image/hand.png'
import voteButton from './image/voteButton.png'
import votedButton from './image/votedButton.png'
import { Link } from 'react-router-dom'

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
                    <Link to="/detail">
                        <div>
                            <div>{this.props.listState.votes}票</div>
                        </div>
                    </Link>
                    <div>
                        <Link to="/detail" onClick={() => this.props.toDetail()}>
                            {this.props.listState.institute}
                        </Link>
                        <p>{this.props.listState.slogan}</p>
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
                <img src={hand} alt="" style={styles.handStyle} />
                <img src={points} alt="" />
            </div>
        );
    }
}
