import React from 'react';
import './index.scss'
import headSide from './image/headSide.png'
import List from '../List'

export default class Mienshow extends React.Component {
    constructor() {
        super();
        this.state = {
            listStates: [
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },{
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
                {
                    votes: 263,
                    haveVote: false,
                    institute: "计算机科学与技术学院",
                    slogan: "他们风采飞扬，英勇无比，是运动场上的健儿"
                },
            ],
        }
    }
    vote(i) {
        const listStates = this.state.listStates.slice();
        listStates[i].haveVote = true;
        listStates[i].votes++;
        this.setState({listStates: listStates})
    }

    render() {
        let lists = [];
        for (let i = 0; i < this.state.listStates.length; i++) {
            lists.push(
                <List 
                    key={i} 
                    value={i} 
                    listState={this.state.listStates[i]}
                    vote={() => this.vote(i)}
                ></List>
            );
        }
        return (
            <div className='mienShow'>
                <div className='mienTitle'>
                    <img src={headSide} alt="headSide" />
                    <div className='titleMain'>
                        <div>剩余票数：<strong>5</strong></div>
                        <div>
                            <nav></nav>
                            <nav></nav>
                            <nav></nav>
                            <nav></nav>
                        </div>
                        <div>风采榜</div>
                        <div>
                            <nav></nav>
                            <nav></nav>
                            <nav></nav>
                            <nav></nav>
                        </div>
                        <div>活动规则</div>
                    </div>
                    <img src={headSide} alt="headSide" />
                </div>
                <div className='mienMain'>
                    {lists}
                </div>
            </div>
        )
    }
}