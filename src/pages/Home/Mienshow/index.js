import React from 'react';
import './index.scss'
import headSide from './image/headSide.png'
import List from '../List'
import store from '../../../redux/store'
import Prompt from '../../../components/prompt'
import Regular from '../../../components/regular'

export default class Mienshow extends React.Component {
    constructor() {
        super();
        this.state = {
            userPolls: store.getState().userPolls,
            listStates: store.getState().cheerleaders,
            havePrompt: false,
            haveRegular: false
        }
        this.promptText = "";
        this.unsubscribe = function(){}
    }
    vote(i) {
        if(this.state.listStates[i].haveVote) {
            return;
        }
        if(store.getState().userPolls === 0) {
            this.promptText = "已满";
            this.setState({havePrompt: true})
            return;
        }

        // axios.get(`https://wx.idsbllp.cn/game/api/index.php?redirect=http://XX.com/cheering_vote/poll/${i}`)
        //     .then(res => {
        //         if (res.data.status === 200) {
        //             store.dispatch({ type: "VOTE", index: i });
        //             this.promptText = "成功";
        //             this.setState({
        //                 listState: store.getState().cheerleaders[i],
        //                 havePrompt: true
        //             });
        //         }
        //     })
        //     .catch(err => {
        //         alert("网络繁忙");
        //         console.log(err);
        //     })

        store.dispatch({type: "VOTE", index: i});
        this.promptText = "成功";
        this.setState({havePrompt: true});
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(this.listener);
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    listener = () => {
        this.setState({
            listStates: store.getState().cheerleaders,
            userPolls: store.getState().userPolls,
        });
    }
    toDetail(i) {
        window.sessionStorage.setItem("detailPage", i);
    }
    close() {
        this.setState({havePrompt: false});
    }
    closeRegular() {
        this.setState({haveRegular: false})
    }
    openRegular() {
        this.setState({haveRegular: true});
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

        const regular = this.state.haveRegular
        ? <Regular closeRegular={() => this.closeRegular()}></Regular>
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
                        <div onClick={() => {this.openRegular()}}>活动规则</div>
                    </div>
                    <img src={headSide} alt="headSide" />
                </div>
                <div className='mienMain'>
                    {lists}
                </div>
                {prompt}
                {regular}
            </div>
        )
    }
}