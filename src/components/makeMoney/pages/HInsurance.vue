<template>
    <Panel cname="insurance" titleLeft="保险保障">
        <div class="recommend">
            <p class="title">100万</p>
            <p class="subtitle">京东账户安全险</p>
            <Btn cname="checkNow">立即查看</Btn>
            <span class="label">今日推荐</span>
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
    name: 'HInsurance',
    data() {
        return {
            iconData: [
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56',
                    tit: '车险'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56',
                    tit: '人寿'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56',
                    tit: '意外'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56',
                    tit: '财产'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56',
                    tit: '健康'
                },
                {
                    iconUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56',
                    tit: '旅行'
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
    .insurance{
        padding-bottom: 1rem;
        position: relative;
        /deep/ h3{
            height: 3rem;
            line-height: 3rem;
        }
        .recommend{
            width: 5.3rem;
            height: 6.5rem;
            float: left;
            box-shadow: 0 0 .5rem .025rem rgba(101, 118, 155, .15);
            margin-left: .75rem;
            text-align: center;
            position: relative;
            .title, .subtitle{
                height: .85rem;
                line-height: .85rem;
                margin-bottom: .6rem;
                text-align: center;
                font-weight: 700;
                @include txtOverflow;
            }
            .title{
                font-size: 1.25rem;
                font-family: DIN-Bold;
                color: #1bd5c7;
                height: 1.55rem;
                line-height: 1.55rem;
                margin: 1.55rem auto .1rem;
            }
            .subtitle{
                font-size: .6rem;
                color: #000;
            }
            .checkNow{
                width: 3.5rem;
                @include btn($height: 1.25rem, $size: .5rem, $padding: 0 .3rem, $bgColor: #1bd5c7, $radius: .75rem, $line: 0);
                box-sizing: content-box;
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