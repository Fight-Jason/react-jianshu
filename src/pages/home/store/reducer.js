import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: true
})

const changeHomeData = (state,action) => {
    return state.merge({
        articleList: fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
    })    
}

const addArticleList = (state, action) => {
    return state.merge({
        'articleList': state.get('articleList').concat(action.list),
        'articlePage': action.nextPage
    })    
}

const toggleScrollTop = (state,action) => {
    return state.set('showScroll', action.flag);
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action)
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action)
        case constants.TOGGLE_SCROLL_TOP:
            return toggleScrollTop(state,action);
        default:
            return state
    }

}