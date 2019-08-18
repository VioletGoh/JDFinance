<template>
    <div class="vip pubMargin">
        <Heador title="金融会员"></Heador>
        <Navbar/>
        <Panel cname="vRight avatar">
            <ul>
                <router-link to="" tag="li">
                    <div class="icon"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t2644/238/1420176553/1442/96e2885/573d96deN06201af5.png"></div>
                    <div class="content"><span>会员福利</span></div>
                </router-link>
            </ul>
        </Panel>
        <Panel cname="vRight">
            <ul>
                <router-link v-for="(item, i) in rightList" :key="i" to="" tag="li">
                    <div class="icon"><img :src="item.iconHref"></div>
                    <div class="content">{{ item.title }}<span>{{ item.link }}</span></div>
                </router-link>
            </ul>
        </Panel>
        <Panel cname="vRight">
            <ul>
                <router-link to="" tag="li">
                    <div class="icon"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t10423/230/287832134/1427/af7e4c86/59cb61b2N53280a30.png?width=70&height=70"></div>
                    <div class="content">实名认证<span></span></div>
                </router-link>
            </ul>
        </Panel>
        <Panel cname="vRight">
            <ul>
                <router-link to="" tag="li">
                    <div class="icon"><img src="https://img12.360buyimg.com/jrpmobile/jfs/t9832/294/292213011/2420/30888b3d/59cb61c9Nc2bbc057.png?width=70&height=70"></div>
                    <div class="content">帮助中心<span></span></div>
                </router-link>
            </ul>
        </Panel>
    </div>
</template>

<script>
import Panel from '@/base/Panel';

export default {
    name: "Vip",
    data() {
        return {
            rightList: [
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t8971/199/1863233880/2035/56d04776/59cb5fbdNa7c682c3.png?width=70&height=70',
                    title: '我的资产',
                    link: '查看全部资产'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t8836/18/2342020923/2120/a9b7a8ff/59cb6124N31cb2889.png?width=70&height=70',
                    title: '我的优惠券',
                    link: '查看全部'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t10264/48/2521964269/2177/cb479501/59f945edNc1197b64.png?width=90&height=90',
                    title: '我的金币',
                    link: '赚金币兑好物'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t12115/250/469950434/3906/ad97c994/5a0bdf3aN22efb724.png?width=90&height=90',
                    title: '我的金条',
                    link: '查看额度'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t9244/132/2364556535/1134/334cd5d9/59cb612dN5b974dc5.png?width=70&height=70',
                    title: '我的借钱',
                    link: '查看全部产品'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t9121/110/2300703915/1348/91af205c/59cb613bN1e749e58.png?width=70&height=70',
                    title: '我的白条',
                    link: '去提额'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/18738/31/15049/5408/5cadb703E039f2599/e92ce5b31d8b1ecf.png?width=70&height=70',
                    title: '兑换优惠券',
                    link: '去兑换'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t8014/149/2344686222/2102/341ff316/59cb616bN3e1bd87d.png?width=70&height=70',
                    title: '我的保障',
                    link: '全方位保障'
                },
                {
                    iconHref: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3907/34/11652/2582/5bd04759Ea9acb837/f893bf98fd67c192.png?width=54&height=54',
                    title: '我的爱车',
                    link: '绑车享专属福利'
                }
            ]
        }
    },
    components: {
        Panel
    }
};
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .vip{
        .vRight{
            &.avatar{
                ul{
                    li{
                        height: 3.5rem;
                        line-height: 3.5rem;
                        .icon{
                            width: 2.5rem;
                            padding: .5rem .8rem 0;
                            img{
                                border-radius: 50%;
                            }
                            &::before{
                                height: 0;
                            }
                        }
                        .content{
                            span{
                                height: 3.5rem;
                            }
                        }
                    }
                }
            }
            ul{
                li{
                    height: 2.8rem;
                    line-height: 2.8rem;
                    display: flex;
                    @include borderBot($color: #eee, $top: bottom);
                    &:first-child{
                        &::before{
                            height: 0;
                        }
                    }
                    .icon{
                        width: 1.2rem;
                        font-size: 0;
                        padding: .8rem .8rem 0;
                        @include borderBot($color: #fff, $top: bottom);
                        img{
                            width: 100%;
                            display: block;
                        }
                    }
                    .content{
                        flex: 1;
                        color: #333;
                        font-size: .8rem;
                        position: relative;
                        @include txtOverflow;
                        span{
                            height: 2.8rem;
                            color: #999;
                            font-size: .7rem;
                            position: absolute;
                            right: .8rem;
                            padding: 0 .8rem 0 .5rem;
                            @include backIcon($size: .5rem, $line: 1px, $color: #e2e2e2, $rotate: 225deg, $top: 50%, $mgrTop: -.25rem);
                            &:before{
                                position: absolute;
                                right: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>