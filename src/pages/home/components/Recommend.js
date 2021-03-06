import React, { PureComponent } from 'react';
import { BoardWrapper , DownloadWrapper , DownloadInfo} from '../style'
import { connect } from 'react-redux';

class Recommend extends PureComponent {
    render() { 
        const { list } = this.props;
        return ( 
            <div>
                <BoardWrapper>
                    {
                        list.map((item) => (
                            <a href="/" key={item.get('key')}>
                                <img src={item.get('imgUrl')} alt={item.get('key')}></img>
                            </a>
                        ))
                    }
                </BoardWrapper>
                <DownloadWrapper>
                    <img className="qrcode" alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
                    <DownloadInfo>
                        <div className="title">下载简书手机App</div>
                        <div className="desc">随时随地发现和创作内容</div>
                    </DownloadInfo>
                </DownloadWrapper>
            </div>
        );
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','recommendList'])
})

export default connect(mapState)(Recommend);