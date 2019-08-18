<template>
    <Panel cname="mSlider">
        <slider :items="list" cname="slider"/>
        <div class="assets">
            <Btn cname="level">会员等级</Btn>
            <router-link class="txt" to="" tag="div">立即登录 马上赚钱！</router-link>
            <Btn cname="sign">签到</Btn>
        </div>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';
import Slider from '@/base/Slider';
import Btn from '@/base/Btn';

export default {
    name: 'MSlider',
    data() {
        return {
            list: [
                {
                    href: '',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/71999/27/5999/84772/5d410117Ef5ea957c/da8d6e5d758774fd.jpg?width=750&height=400'
                },
                {
                    href: '',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/35731/27/14378/124844/5d400a99E08530579/cba4b33a090f8ed2.png?width=750&height=400'
                },
                {
                    href: '',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/44275/12/10265/25627/5d3a7326E25751e7f/a78bbf67ef1c9461.jpg?width=750&height=400'
                },
                {
                    href: '',
                    src: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/56819/3/5732/50247/5d36d04dEee287aaf/4ffcd8155025e08b.jpg?width=750&height=400'
                }
            ]
        }
    },
    components: {
        Panel,
        Slider,
        Btn
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .mSlider{
        padding-bottom: 1rem;
        margin-top: 0;
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
            bottom: .65rem;
            .swiper-pagination-bullet{
                width: .2rem;
                height: .2rem;
                background-color: hsla(0, 0%, 100%, .8);
            }
            .swiper-pagination-bullet-active{
                width: .4rem;
                background-color: #fff;
                border-radius: .2rem;
            }
        }
        .assets{
            height: 3.25rem;
            margin: -.4rem .8rem 0;
            border-radius: .1rem;
            box-shadow: 0 0 .5rem .025rem rgba(101, 118, 155, .15);
            z-index: 10;
            background-color: #fff;
            position: relative;
            .level{
                @include btn($height: 1.65rem, $size: .45rem, $padding: 0 .25rem, $bgColor: linear-gradient(to bottom right, #fbde9b 15%, #debe82, #ae905e 75%), $radius: .1rem, $line: 0);
                box-shadow: 0 0.15rem 0.2rem 0 hsla(41, 44%, 63%, .51);
                position: absolute;
                top: 50%;
                left: .5rem;
                margin-top: -.825rem;
            }
            .txt{
                color: #c6a76f;
                font-size: .7rem;
                font-weight: 600;
                line-height: 3.25rem;
                padding-left: .5rem;
                margin: 0 4.25rem 0 2.8rem;
            }
            .sign{
                @include btn($height: 1.65rem, $size: .6rem, $padding: 0 1.15rem, $bgColor: linear-gradient(to right, #f0d598, #af9260), $radius: 1.65rem, $line: 0);
                box-shadow: 0 0.2rem 0.3rem 0 hsla(40, 41%, 61%, .41);
                position: absolute;
                top: 50%;
                right: .75rem;
                margin-top: -.825rem;
            }
        }
    }
</style>