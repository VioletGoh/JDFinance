<template>
    <Panel cname="reward" titleLeft="赏金任务">
        <!-- <h3>赏金任务<span class="moreTask">查看更多任务</span></h3> -->
        <span class="moreTask">查看更多任务</span>
        <slider :items="rewardData" :options="rewardOption" cname="slider" />
        <div class="banner"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200"></div>
        <div class="banner"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/37697/16/1334/187953/5cb44c65E5dbefe83/200ce71a4347aeec.png?width=750&height=200"></div>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';
import Slider from '@/base/Slider';

export default {
    name: 'MReward',
    data() {
        return {
            rewardData: [
                {
                    href: 'Vip',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260'
                },
                {
                    href: 'BorrowMoney',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260'
                },
                {
                    href: 'BorrowMoney',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260'
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
        // padding-bottom: 1rem;
        background-color: #f5f5f5;
        position: relative;
        /deep/ h3{
            height: 3rem;
            line-height: 3rem;
            // font-size: .9rem;
            // padding: 0 .75rem;
            background-color: #fff;
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
        .slider{
            padding-bottom: .4rem;
            background-color: #fff;
        }
        .banner{
            font-size: 0;
            padding-bottom: 1rem;
            margin-bottom: .5rem;
            background-color: #fff;
            img{
                width: 100%;
                display: block;
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