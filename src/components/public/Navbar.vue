<template>
    <ul class="navbar">
        <router-link to="/Home" tag="li">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/8325/8/4331/3095/5bda5c89E1be47c14/47b6a296683a12a5.png?width=90&height=90">
            <p>首页</p>
        </router-link>
        <router-link to="/MakeMoney" tag="li">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60">
            <p>赚钱</p>
        </router-link>
        <router-link to="/BorrowMoney" tag="li">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60">
            <p>借钱</p>
        </router-link>
        <router-link to="/SaveMoney" tag="li">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60">
            <p>省钱</p>
        </router-link>
        <router-link to="/Vip" tag="li">
            <img src="https://img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60">
            <p>金融会员</p>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .navbar{
        @include list(row);
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2.5rem;
        z-index: 999;
        background-color: #fff;
        li{
            flex: 1;
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
</style>