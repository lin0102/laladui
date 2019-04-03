import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios';

const initialState = {
    sum: 2333,
    userPolls: 5,
    collegeId: 0,
    cheerleaders: [
        {
            votes: 263,
            haveVote: false,
            code: 1,
            institute: "通信与信息工程学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 2,
            institute: "计算机科学与技术学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 3,
            institute: "自动化学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 4,
            institute: "先进制造工程学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 5,
            institute: "光电工程/国际半导体学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 6,
            institute: "软件工程学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 7,
            institute: "生物信息学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 8,
            institute: "理学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 9,
            institute: "经济管理学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 10,
            institute: "传媒艺术学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 11,
            institute: "外国语学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 12,
            institute: "国际学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
        {
            votes: 263,
            haveVote: false,
            code: 13,
            institute: "网络空间安全与信息法学院",
            slogan: "他们风采飞扬，英勇无比，是运动场上的健儿",
            introduction: "队是由各个院系统招专科普通学生组成的一支精灵而富有新时代想法的队伍。这是一支学习生活之余由普通学生组建起来的一个业余爱好施展的大舞台，这是一个学生挑战自我，优秀自身，实现梦想的队伍。自队伍成立以来，大家抽出业余时间，由专业老师带队，积极训练，团结一致。暑期一起赴西亚斯集训，共同吃住，共同努力。有幸代表我院，在CUBA中国大学生篮球联赛决赛集训中成为表演队伍。",
            tags: ["可爱", "活力", "穿着品如的衣服"],
            imgSrc: []
        },
    ]
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case "VOTE":
            let tempState = state.cheerleaders;
            let [sum, userPolls] = [state.sum, state.userPolls];
            sum++;
            userPolls--;
            tempState[action.index].haveVote = true;
            tempState[action.index].votes++;
            return Object.assign({}, state, {
                sum: sum,
                userPolls: userPolls,
                cheerleaders: tempState
            });

            
        case "INIT":
            const laladui = action.laladui;
            const user = action.user;
            const total = action.sum;
            const pollsOfUser = user.polls;
            const collegeId = user.collage_id;
            const cheerStatus = user.cheer_status;
            const cheerleaders = state.cheerleaders;

            for(let i = 0; i < 13; i++) {
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