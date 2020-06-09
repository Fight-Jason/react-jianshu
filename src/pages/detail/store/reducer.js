import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    title: '成年人的世界，朋友圈还是不要随便发了！',
    content: '<p>早上出门路过一个小区，小区把山挨着路边，一群鸽子飞起来在天空中盘旋着，画成了一道美丽的风景。玩够了它们返回基地，20多只鸽子不偏不倚全部落在了自家窗户栏杆上，没有一只掉队去叨扰邻居。</p><p>曾经在自家小区闲逛，想跟朋友指引自家窗户，却怎么也找不到了，从上到下从左到右数起来，才弄清楚哪个窗户是自己家的。而且这样的事在朋友家也是如此，她倒没像我一样数楼层，脱口而出:“好像是那个吧？”也拿不准了</p><p>鸽子们可不会迷路，稳稳的落下来，踩着自家窗台俯瞰着我，为自己超强的方向感沾沾自喜。</p><p>这让我想到了古代的信鸽，这边把信卷起来放在小的竹筒里，盖好竹筒盖子，把竹筒绑在信鸽的脚上，寄信人走出房间把信鸽轻轻一抛，信鸽顺势飞起来.</p>'
})

export default (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }

}


                  