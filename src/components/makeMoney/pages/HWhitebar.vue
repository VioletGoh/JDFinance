<template>
    <Panel cname="whiteBar" titleLeft="白条">
        <span class="moreTask">年轻不留白</span>
        <div class="xiaoBai">
            <div class="circle">
                <p>小白信用分</p>
            </div>
            <Btn cname="login">登录查看</Btn>
        </div>
        <ul class="iconBox">
            <li v-for="(item, i) in iconData" :key="i">
                <img :src="item.iconUrl">
                <p>{{ item.tit }}</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';
import Btn from '@/base/Btn';

export default {
    name: 'HWhitebar',
    data() {
        return {
            iconData: [
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56',
                    tit: '白条'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56',
                    tit: '还款'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56',
                    tit: '1元抢券'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56',
                    tit: '小白卡'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56',
                    tit: '金条'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56',
                    tit: '校园'
                }
            ]
        }
    },
    components: {
        Panel,
        Btn
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .whiteBar{
        padding-bottom: 1rem;
        position: relative;
        /deep/ h3{
            height: 3rem;
            line-height: 3rem;
            // font-size: .9rem;
            // padding: 0 .75rem;
        }
        .moreTask{
            color: #999;
            font-size: .6rem;
            font-weight: 600;
            position: absolute;
            top: 1.2rem;
            right: 0;
            padding-right: .6rem;
            margin-right: .75rem;
            cursor: pointer;
            @include backIcon($size: .4rem, $line: .1rem, $color: #999, $rotate: 225deg, $top: 50%, $mgrTop: -.2rem);
            &:before{
                position: absolute;
                right: 0;
            }
        }
        .xiaoBai{
            width: 5.3rem;
            height: 6.5rem;
            float: left;
            box-shadow: 0 0 .5rem .025rem rgba(101, 118, 155, .15);
            margin-left: .75rem;
            text-align: center;
            position: relative;
            .circle{
                width: 4.6rem;
                height: 4.6rem;
                margin: .4rem auto .35rem;
                background: url(data:image/png;base64,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) top no-repeat;
                background-size: 100% auto;
                position: relative;
                p{
                    position: absolute;
                    top: 1.7rem;
                    left: 50%;
                    margin-left: -1.5rem;
                    font-size: .6rem;
                    font-weight: 600;
                    color: #c4a36c;
                    text-align: center;
                }
            }
            .login{
                width: 3.5rem;
                position: absolute;
                bottom: .6rem;
                left: 50%;
                margin-left: -1.75rem;
                @include btn($height: 1.25rem, $size: .5rem, $padding: 0, $bgColor: #d4b575, $radius: .75rem, $line: 0);
            }
        }
        .iconBox{
            height: 6.5rem;
            margin: 0 .75rem 0 34%;
            border-radius: .1rem;
            box-shadow: 0 0 .5rem .025rem rgba(101, 118, 155, .15);
            @include list(row);
            li{
                width: 33.333333%;
                text-align: center;
                font-size: 0;
                img{
                    width: 1.4rem;
                    height: 1.4rem;
                    margin: .5rem auto .05rem;
                    display: block;
                }
                p{
                    color: #333;
                    font-size: .6rem;
                    @include txtOverflow;
                }
            }
        }
    }
</style>