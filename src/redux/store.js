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
            const laladui = action.laladui;
            const user = action.user;
            const total = action.sum;

            const pollsOfUser = user.polls;
            const collegeId = user.collage_id;
            const cheerStatus = user.cheer_status;
            const cheerleaders = state.cheerleaders;

            for (let i = 0; i < 13; i++) {
                const cheerState = cheerStatus[i];
                const cheerleader = laladui[i];
                cheerleaders[i].votes = cheerleader.polls;
                cheerleaders[i].haveVote = Boolean(cheerState.status);
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

function getUserInfo() {
    return axios.get("http://localhost:3001/user/");
}
function getLaladuiInfo() {
    return axios.get("http://localhost:3001/laladui/");
}

axios.all([getUserInfo(), getLaladuiInfo()])
    .then(axios.spread((user, laladui) => {
        const userInfo = user.data.showVoter;
        const laladuiInfo = laladui.data.cheerleaders;
        const sum = laladui.data.sum;
        store.dispatch({
            type: "INIT",
            sum: sum,
            user: userInfo,
            laladui: laladuiInfo,
        })
    }))

export default store;