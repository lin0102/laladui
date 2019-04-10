import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import { initialState } from './data';


const reducer = function (state = initialState, action) {
    switch (action.type) {
        case "VOTE":
            let tempState = state.cheerleaders;
            let [sum, userPolls] = [state.sum, state.userPolls];
            const i = action.index;

            sum++; userPolls--;

            tempState[i].haveVote = true;
            tempState[i].votes++;
            if (tempState[action.index].code === state.collegeId) {
                tempState[i].votesOfSelf++;
            } else {
                tempState[i].votesOfOther++;
            }
            return Object.assign({}, state, {
                sum: sum,
                userPolls: userPolls,
                cheerleaders: tempState,

            });


        case "INIT":
            const pollsOfUser = action.user.surplus_times;
            const collegeId = action.user.info.college;
            let total = 0;
            const cheerleaders = state.cheerleaders;
            const laladui = action.user.college_status;

            for (let i = 0; i < 13; i++) {
                const cheerleader = laladui[i];

                cheerleaders[i].votesOfSelf = cheerleader.native_num;
                cheerleaders[i].votesOfOther = cheerleader.foreign_num;
                cheerleaders[i].haveVote = Boolean(cheerleader.isPraise);
                cheerleaders[i].votes = cheerleader.native_num + cheerleader.foreign_num;
                total += cheerleaders[i].votes;
            }

            return Object.assign({}, state, {
                sum: total,
                cheerleaders: cheerleaders,
                collegeId: collegeId,
                userPolls: pollsOfUser
            });


        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools());

axios.post("https://wx.idsbllp.cn/game/Cheer2019/index.php/Home/Index/userStatus")
    .then(res => {
        if (res.data.status === 200) {
            const userInfo = res.data.data;
            store.dispatch({
                type: "INIT",
                user: userInfo,
            })
        } else {
            alert("网络错误");
        }
    })
    .catch(err => {
        console.log(err);
    })

export default store;