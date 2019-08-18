<template>
    <Panel cname="reward" titleLeft="银行精选">
        <span class="moreTask">更多银行服务</span>
        <slider :items="rewardData" :options="rewardOption" cname="slider" />
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';
import Slider from '@/base/Slider';

export default {
    name: 'MBank',
    data() {
        return {
            rewardData: [
                {
                    href: 'Vip',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t11293/128/3052512266/21236/ff9211a7/5cde1a7bNec04b900.png?width=210&height=260'
                },
                {
                    href: 'BorrowMoney',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/78161/22/1122/6862/5cf64f57E22d73ec6/6db7f006167ae90c.png?width=210&height=260'
                },
                {
                    href: 'BorrowMoney',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/52696/34/1660/7438/5cf64f6aE85f1676e/bded5460995cc76e.png?width=210&height=260'
                },
                {
                    href: 'BorrowMoney',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26410/345/1052784155/8412/66e542af/5bc04992N0d13e713.jpg?width=210&height=260'
                }
            ],
            rewardOption: {
                autoplay: false,
                slidesPerView: 2.5,
                spaceBetween: 8,
                freeMode: true //设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
            }
        }
    },
    components: {
        Panel,
        Slider
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .reward{
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
        /deep/ .swiper-slide{
            width: 5.25rem !important;
            font-size: 0;
            &:first-child{
                margin-left: .8rem;
            }
            a{
                display: block;
                img{
                    width: 100%;
                    display: block;
                }
            }
        }
    }
</style>