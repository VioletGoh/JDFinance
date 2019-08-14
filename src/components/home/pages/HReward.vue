<template>
    <Panel cname="reward" title="赏金任务">
        <slider :items="sliderData" :options="sliderOption" cname="slider" />
    </Panel>
</template>

<script>
import Panel from "@/base/Panel";
import Slider from "@/base/Slider";

export default {
    name: "HReward",
    data() {
        return {
            sliderData: [
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
            sliderOption: {
                autoplay: false,
                slidesPerView: 2.5,
                spaceBetween: 12,
                freeMode: true //设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
            }
        };
    },
    components: {
        Panel,
        Slider
    }
};
</script>

<style lang="scss" scoped>
    .reward{
        padding-bottom: 1.5rem;
        /deep/ .swiper-slide{
            width: 125px !important;
            font-size: 0;
            &:first-child{
                margin-left: 16px;
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
