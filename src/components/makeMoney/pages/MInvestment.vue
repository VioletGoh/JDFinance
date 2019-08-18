<template>
    <Panel cname="investment" titleLeft="定期精选">
        <span class="moreTask">查看更多理财</span>
        <!-- <slider :items="investmentData" :options="investmentOption" cname="slider" /> -->
        <div class="banner"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200"></div>
        <swiper :options="investmentOption" cname="slider">
            <swiper-slide v-for="(val, i) in investmentData" :key="i">
                <router-link :to="val.href">
                    <p class="tit">{{ val.title }}</p>
                    <Btn v-if="val.btnTxt" cname="btnTxt">{{ val.btnTxt }}</Btn>
                    <p v-if="val.sum" class="sum">{{ val.sum }}<em>%</em></p>
                    <p v-if="val.desc" class="desc">{{ val.desc }}</p>
                </router-link>
            </swiper-slide>
        </swiper>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';
import Btn from '@/base/Btn';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
// import Slider from '@/base/Slider';

export default {
    name: 'MInvestment',
    data() {
        return {
            investmentData: [
                {
                    href: '',
                    title: '月月盈',
                    btnTxt: '每日限量',
                    sum: '3.70',
                    desc: '近七日年化'
                },
                {
                    href: '',
                    title: '小金保',
                    btnTxt: '+1%奖励金',
                    sum: '5.50',
                    desc: '历史年化结算利率'
                },
                {
                    href: '',
                    title: '活期盈',
                    btnTxt: '灵活可转',
                    sum: '3.55',
                    desc: '近七日年化'
                },
                {
                    href: '',
                    title: '保底盈',
                    btnTxt: '明星产品',
                    sum: '5.50',
                    desc: '历史年化结算利率'
                }
            ],
            investmentOption: {
                autoplay: false,
                slidesPerView: 2.5,
                spaceBetween: 8,
                freeMode: true //设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合
            }
        }
    },
    components: {
        Panel,
        // Slider
        swiper,
        swiperSlide,
        Btn
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .investment{
        // padding-bottom: .625rem;
        padding: 6rem 0 .625rem;
        position: relative;
        /deep/ h3{
            height: 3rem;
            line-height: 3rem;
            // font-size: .9rem;
            // padding: 0 .75rem;
            margin-bottom: -.375rem;
        }
        .moreTask{
            color: #999;
            font-size: .6rem;
            font-weight: 600;
            position: absolute;
            top: 7.2rem;
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
        .banner{
            font-size: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            img{
                width: 100%;
                display: block;
            }
        }
        /deep/ .swiper-wrapper{
            height: 7rem;
            padding-top: .375rem;
        }
        /deep/ .swiper-slide{
            width: 5.25rem !important;
            height: 6.5rem !important;
            padding: 0 .75rem;
            font-size: 0;
            border-radius: .1rem;
            box-shadow: 0 0 .5rem .025rem rgba(101, 118, 155, .15);
            box-sizing: border-box;
            &:first-child{
                margin-left: .75rem;
            }
            a{
                display: block;
                .tit{
                    height: 1.15rem;
                    line-height: 1.15rem;
                    font-size: .8rem;
                    color: #333;
                    margin: .95rem auto .25rem;
                }
                .btnTxt{
                    @include btn($height: .8rem, $size: .5rem, $padding: 0 .25rem, $bgColor: linear-gradient(#5e8fff, #2f6fff), $radius: .55rem, $line: 0);
                    // background-color: linear-gradient(#5e8fff, #2f6fff);
                }
                .sum{
                    height: 1.5rem;
                    line-height: 1.5rem;
                    font: 700 1.25rem DIN-Bold;
                    color: #ff281e;
                    @include txtOverflow;
                    em{
                        margin-left: .1rem;
                        font-size: .8rem;
                        font-family: PingFangSC-Regular,Arial,"Helvetica Neue",Helvetica,sans-serif;
                    }
                }
                .desc{
                    height: .7rem;
                    line-height: .7rem;
                    color: #999;
                    font-size: .5rem;
                    margin-top: .2rem;
                }
            }
        }
    }
</style>