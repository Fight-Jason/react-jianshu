import React from 'react';
import { HeaderWrapper,Logo, Nav , NavItem, NavSearch ,Addition ,Button , SearchWrapper } from './style';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import  { actionCreators }  from  './store';

const Header = (props) => {
    return ( 
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />                            
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60b;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button>
                    <i className="iconfont">&#xe6e5;</i>
                    写文章
                </Button>                    
                <Button>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}

const mapStateToProps = (state)=> {
    return {
        focused: state.getIn(["header","focused"])
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handleInputFocus() {
            dispatch(actionCreators.serachFoucus())   
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur()) 
        }
    }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(Header);