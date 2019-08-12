<template>
    <div class="hSlider">
        <slider :items="sliderData" cname="slider"/>
    </div>
</template>

<script>
import Slider from '@/base/Slider';

export default {
    name: 'HSlider',
    data() {
        return {
            sliderData: [{
                href: 'Home',
                src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png?width=750&height=320'
            }, {
                href: 'Home',
                src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/54124/12/3394/140400/5d11e389Ee12d74f3/f3cba452b6470938.png?width=750&height=320'
            }]
        }
    },
    components: {
        Slider
    }
}
</script>

<style lang="scss" scoped>
    .hSlider{
        background-color: #fff;
        .slider{
            height: 43vw;//轮播图片宽高等比缩放
            overflow: hidden;
            /deep/ .swiper-slide{
                a{
                    display: block;
                    img{
                        width: 100%;
                        display: block;
                    }
                }
            }
            /deep/ .swiper-pagination{
                .swiper-pagination-bullet-active{
                    background-color: #fff;
                    opacity: .8;
                }
            }
        }
    }
</style>