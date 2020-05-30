import React, { Component } from 'react';
import { connect } from 'react-redux'
import  { actionCreators }  from  './store';
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import List from './components/List'
import { 
    HomeWrapper, 
    HomeLeft ,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleScrllTop() {

        window.scrollTo(0, 0)
    }
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
                { this.props.showScroll ? <BackTop onClick={this.handleScrllTop}>回到顶部</BackTop> : null }
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo())
    },
    changeScrollTopShow(e) {
        if(document.documentElement.scrollTop > 100) {
            dispatch(actionCreators.toggleTopShow(true))
        }else {
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})
export default connect(mapState, mapDispatch)(Home);