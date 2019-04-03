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
            haveImg: false,
            imgsrc: ""
        };
        this.promptText = "";
    }
    vote() {
        if(this.state.listState.haveVote) {
            return;
        }
        if(store.getState().userPolls === 0) {
            this.promptText = "已满";
            this.setState({havePrompt: true})
            return;
        }
        store.dispatch({type: "VOTE", index: this.pageNum});
        this.promptText = "成功";
        this.setState({
            listState: store.getState().cheerleaders[this.pageNum],
            havePrompt: true
        });
    }
    close() {
        this.setState({havePrompt: false});
    }
    showImg(i) {
        const imgsrc = this.state.listState.imgSrc[i];
        this.setState({imgsrc: imgsrc, haveImg: true});
    }
    hideImg() {
        this.setState({haveImg: false});
    }
    render() {
        const prompt = this.state.havePrompt 
        ? <Prompt text={this.promptText} closeSelf={() => this.close()}></Prompt>
        : null;
        const bigImg = this.state.haveImg
        ? <div className='bigimg' onClick={() => {this.hideImg()}}><img src={this.state.imgsrc} alt=""/></div>
        : null;
        return (
            <div className='detail'>
                <div className='detail-head'>
                    <Carousel 
                        imgsrc={this.state.listState.imgSrc}
                        showImg={(i) => {this.showImg(i)}}
                    ></Carousel>
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
                <p className='detail-intro'>
                    {this.state.listState.introduction}
                </p>
                <div 
                    className='detail-button' 
                    onClick={() => this.vote()}
                >
                    {this.state.listState.haveVote ? "已投" : "投票"}
                </div>
                {prompt}
                {bigImg}
            </div>
        )
    }
}
 