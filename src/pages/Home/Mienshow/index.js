import React from 'react';
import './index.scss'
import headSide from './image/headSide.png'
import List from '../List'
import store from '../../../redux/store'
import Prompt from '../../../components/prompt'

export default class Mienshow extends React.Component {
    constructor() {
        super();
        this.state = {
            userPolls: store.getState().userPolls,
            listStates: store.getState().cheerleaders,
            havePrompt: false
        }
        this.promptText = "";
    }
    vote(i) {
        const tempState = store.getState();
        if(tempState.cheerleaders[i].haveVote) {
            return;
        }
        if(tempState.userPolls === 0) {
            this.promptText = "已满";
            this.setState({havePrompt: true})
            return;
        }
        store.dispatch({type: "VOTE", index: i});
        this.promptText = "成功";
        this.setState({
            listStates: store.getState().cheerleaders, 
            havePrompt: true,
            userPolls: store.getState().userPolls
        });
    }
    toDetail(i) {
        window.sessionStorage.setItem("detailPage", i);
    }
    close() {
        this.setState({havePrompt: false});
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
                    toDetail={() => this.toDetail(i)}
                ></List>
            );
        }
        const prompt = this.state.havePrompt 
        ? <Prompt text={this.promptText} closeSelf={() => this.close()}></Prompt>
        : null;
        return (
            <div className='mienShow'>
                <div className='mienTitle'>
                    <img src={headSide} alt="headSide" />
                    <div className='titleMain'>
                        <div>剩余票数：<strong>{this.state.userPolls}</strong></div>
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
                {prompt}
            </div>
        )
    }
}