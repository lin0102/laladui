import React from 'react';
import './index.scss';
import Carousel from '../../components/carousel';
import store from '../../redux/store';
import Prompt from '../../components/prompt';

export default class Detail extends React.Component {
    constructor() {
        super();
        this.pageNum = window.sessionStorage.getItem('detailPage');
        this.state = {
            listState: store.getState().cheerleaders[this.pageNum],
            havePrompt: false,
        };
        this.promptText = "";
    }
    vote() {
        const tempState = store.getState();
        if(tempState.cheerleaders[this.pageNum].haveVote) {
            return;
        }
        if(tempState.userPolls === 0) {
            this.promptText = "已满";
            this.setState({havePrompt: true})
            return;
        }
        const listState = this.state.listState;
        store.dispatch({type: "VOTE", index: this.pageNum});
        this.promptText = "成功";
        this.setState({listState: listState, havePrompt: true});
    }
    close() {
        this.setState({havePrompt: false});
    }
    render() {
        const prompt = this.state.havePrompt 
        ? <Prompt text={this.promptText} closeSelf={() => this.close()}></Prompt>
        : null;
        return (
            <div className='detail'>
                <div className='detail-head'>
                    <Carousel></Carousel>
                </div>
                <div className='detail-tag'>
                    <div className='tag-left'>
                        <p className='tag-institute'>{this.state.listState.institute}</p>
                        <div>
                            <p>{this.state.listState.tags[0]}</p>
                            <p>{this.state.listState.tags[1]}</p>
                            <p>{this.state.listState.tags[2]}</p>
                        </div>
                    </div>
                    <div className='tag-right'>
                        <div>323分</div>
                        <div>{this.state.listState.votes}票</div>
                    </div>
                </div>
                <p>
                    {this.state.listState.introduction}
                </p>
                <div 
                    className='detail-button' 
                    onClick={() => this.vote()}
                >
                    {this.state.listState.haveVote ? "已投" : "投票"}
                </div>
                {prompt}
            </div>
        )
    }
}
 