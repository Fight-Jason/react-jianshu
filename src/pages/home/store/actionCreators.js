import axios from 'axios';
import * as constants from './constants';

export const changeHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList    
})
export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data;
            const action = changeHomeData(result)
            dispatch(action)
        })
    }
}