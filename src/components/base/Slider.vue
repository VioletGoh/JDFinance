<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item, i) in items" :key="i">
                <router-link :to="item.href">
                    <img :src="item.src">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                    autoplay: true,//是否自动滚动
                    loop: true,//是否轮回播放（最后一张播放完了后，是否再循环到第一张播放）
                    notNextTick: false,// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            }
        },
        items: {
            type: Array,
            default() {
                return {}
            }
        },
        cname: {
            type: String,
            default: ''
        }
    },
    name: 'Slider',
    data() {
        return {

        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style lang="css">
    /* @import '~swiper/dist/css/swiper.css'; */
</style>