<template>
    <Panel cname="navbar">
        <ul>
            <router-link v-for="(item, i) in navList" :key="i" :to="item.name" tag="li">
                <img :src="item.navSrc">
                <p>{{ item.title }}</p>
            </router-link>
        </ul>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';

export default {
    name: 'Navbar',
    data() {
        return {
            navList: [
                {
                    name: 'Home',
                    navSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90',
                    title: '首页'
                },
                {
                    name: 'MakeMoney',
                    navSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60',
                    title: '赚钱'
                },
                {
                    name: 'BorrowMoney',
                    navSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60',
                    title: '借钱'
                },
                {
                    name: 'SaveMoney',
                    navSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60',
                    title: '省钱'
                },
                {
                    name: 'Vip',
                    navSrc: 'https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60',
                    title: '金融会员'
                }
            ]
        }
    },
    components: {
        Panel
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .navbar{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2.5rem;
        z-index: 999;
        margin: 0;
        box-shadow: 0 -3px 4px rgba(0,0,0,.03);
        /deep/ h4{
            display: none;
        }
        ul{
            @include list(row);
            li{
                flex: 1;
                height: 2.5rem;
                font-size: .6rem;
                color: #b1b4bb;
                text-align: center;
                cursor: pointer;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                    margin: .3rem auto .15rem;
                    display: block;
                }
                p{
                    line-height: .8rem;
                }
                &.router-link-active{
                    color: #4668FF;
                }
            }
        }
    }
</style>