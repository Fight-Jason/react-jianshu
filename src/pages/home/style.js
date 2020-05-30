import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
    /* height: 300px; */
`
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
export const BoardWrapper = styled.div`
    padding-top: 30px;
    padding-bottom: 4px;
    min-height: 228px;
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
export const DownloadWrapper = styled.a.attrs({
    href: '/'
})`
    display:block;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .qrcode {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`

export const DownloadInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
        font-size: 15px;
        color: #333;
    }
    .desc {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`