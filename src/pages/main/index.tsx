import { Chrono, TimelineItem } from 'react-chrono';

import generateStar from '../../helper/generateStar';
import './index.less';
import { useEffect } from 'react';

const data: TimelineItem[] = [
    {
        title: '1998年，我出生了',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://to-out-use.oss-cn-hangzhou.aliyuncs.com/common/mother-min.png',
            },
        },
        cardDetailedText:
            '1998年的春天，我降生了，刚出生一个月的时候，我父亲说我眼睛还没有睁开，结果就是导致了我现在眼睛小，哈哈，可能这就是"宿命"吧。那时候我出生在一个贫穷的农村家庭......',
    },
    {
        title: '2012年，我小学毕业了',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://to-out-use.oss-cn-hangzhou.aliyuncs.com/common/1mvRL0.jpg',
            },
        },
        cardDetailedText:
            '2012年的夏天，我小学毕业了，依稀记得那时候留着杀马特的发型，和几个要好的哥们，一起拍了毕业照，当然，那些照片都不在了，那些回不去的童年，emm，至今怀念......',
    },
    {
        title: '2015年，我初中毕业了',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://to-out-use.oss-cn-hangzhou.aliyuncs.com/common/T4a5aB.jpg',
            },
        },
        cardDetailedText:
            '初中那年，带着青春懵懂的气息，第一次接触恋爱的大门，是青涩，也是回忆，更多的是单纯，拿着过去那个年代的大哥大，小灵通，玩着3G网络下的文字游戏，和发小一起登顶祁连山，好多事情，满满的回忆～',
    },
    {
        title: '2016年，我高中毕业了',
        media: {
            type: 'IMAGE',
            source: {
                url: 'https://to-out-use.oss-cn-hangzhou.aliyuncs.com/common/3emcQ2.jpg',
            },
        },
        cardDetailedText:
            '高中时代，我觉得是一个能激发人思维活力的时代，或者扼杀人思维活力的时代，因为当时的学校对于学生的精力压榨足够的多，一些不必要的精力压榨也足够的多，接触过很多形形色色的同学，抽过烟、打过架、谈过恋爱、挨过打......真是难以启齿，不过吧，好在高中结束后，我成功以 521 分的高考成绩上岸～',
    },
    {
        title: '2019年，我找到了第一份实习工作',
        cardDetailedText: '第一份实习工作是前端～',
    },
    {
        title: '2020年，我大学毕业了',
        cardDetailedText:
            '大学，emmm，一个让我怀揣着复杂心情的4年，也是青春最后的懵懂时光，真是花有重开日，人无再少年～，其实吧，我的大学还是有蛮多故事的，但是我想在一个月黑风高的夜晚去讲述～',
    },
    {
        title: '2021年，我成功跳槽上岸，换了一份新的工作',
        cardDetailedText: '新的工作也是前端，hhh',
    },
];

function Main() {
    useEffect(() => {
        generateStar();
    }, []);

    return (
        <div className="whoami-container">
            <Chrono
                items={data}
                mode="VERTICAL_ALTERNATING"
                hideControls
                slideShow
                flipLayout
                enableOutline
                theme={{
                    // cardBgColor: 'yellow',
                    cardForeColor: '#000000',
                    titleColor: 'white',
                    // titleColorActive: 'red',
                }}
            />
        </div>
    );
}
export default Main;
