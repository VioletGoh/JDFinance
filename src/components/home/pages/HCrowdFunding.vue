<template>
    <Panel cname="crowdFunding" title="众筹新品">
        <slider :items="crowdFundingData" :options="options" cname="slider" />
    </Panel>
</template>

<script>
import Panel from "@/base/Panel";
import Slider from "@/base/Slider";

export default {
    name: 'HCrowdFunding',
    data() {
        return {
            crowdFundingData: [
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/50050/5/6566/36727/5d41873aEc3382fc4/d9777468823c0b2a.jpg?width=335&height=421'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/80805/20/6012/33103/5d418790Efe2deb02/9bd97297964310e3.jpg?width=335&height=421'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/84523/40/6287/29812/5d4187c2E708c6479/389263b0d68315bf.jpg?width=335&height=421'
                }
            ],
            options: {
                autoplay: false,
                slidesPerView: 2.5,
                spaceBetween: 12,
                freeMode: true
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
    .crowdFunding{
        padding-bottom: 1rem;
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