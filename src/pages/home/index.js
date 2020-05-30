import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { actionCreators }  from  './store';
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import { 
    HomeWrapper, 
    HomeLeft ,
    HomeRight 
} from './style'
class Home extends Component {
    render() { 
        return ( 
            <HomeWrapper> 
                <HomeLeft>
                    <img  className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4969/efed5888b8c06b5eae2e58bf6181846de4246178.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    }
})
export default connect(null, mapDispatch)(Home);