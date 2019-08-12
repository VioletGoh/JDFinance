<template>
    <article class="insurance">
        <Panel cname="insuranceSection" title="保险保障">
            <slider :items="sliderData" :options="sliderOption" cname="slider" />
        </Panel>
    </article>
</template>

<script>
import Panel from "@/base/Panel";
import Slider from "@/base/Slider";

export default {
    namge: 'HInsurance',
    data() {
        return {
            sliderData: [
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260'
                },
                {
                    href: 'Home',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260'
                }
            ],
            sliderOption: {
                autoplay: false,
                loop: false,
                slidesPerView: 2.5,
                spaceBetween: 12
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
    .insurance{
        padding-bottom: 1.5rem;
        background-color: #fff;
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