<template>
    <Panel cname="icon">
        <ul>
            <li v-for="(item, i) in iconList" :key="i">
                <div class="img"><img :src="item.imgUrl" :alt="item.title"></div>
                <p class="title">{{ item.title }}</p>
                <p class="desc" v-if="item.desc">{{ item.desc }}</p>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';

export default {
    name: 'HIcon',
    data() {
        return {
            iconList: [{
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title: '优惠券',
                desc: '30-10券'
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                title: '领福利',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                title: '抢钢镚',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                title: '白条提额',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/520/34/950/3686/5b9239e3Eaaf5465c/8d8c35badacfc114.png?width=90&height=90',
                title: '工资理财',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1216/39/659/4516/5b923b1cE5943d1c6/dabaf8b842f57eb9.png?width=90&height=90',
                title: '众筹',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/36242/13/119/12214/5cb06492E0c73a66f/a284f91242e27af1.png?width=90&height=90',
                title: '免费领京豆',
                desc: ''
            }, {
                imgUrl: 'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                title: '优惠券',
                desc: ''
            }]
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .icon{
        margin: 0;
        ul{
            padding-bottom: 1rem;
            @include list(row);
            li{
                width: 25%;
                padding-top: 1rem;
                text-align: center;
                box-sizing: border-box;
                .img{
                    width: 2.25rem;
                    height: 2.25rem;
                    margin: 0 auto;
                    img{
                        width: 100%;
                        display: block;;
                    }
                }
                .title{
                    color: #666;
                    font-size: .65rem;
                    margin-top: .3rem;
                    @include txtOverflow;
                }
                .desc{
                    color: #FF801A;
                    font-size: .55rem;
                    margin-top: .2rem;
                    @include txtOverflow;
                }
            }
        }
    }
</style>