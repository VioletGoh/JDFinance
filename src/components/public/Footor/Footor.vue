<template>
    <Panel cname="footer">
        <ul>
            <router-link v-for="(item, i) in list" :key="i" to="" tag="li">{{ item.txt }}</router-link>
        </ul>
    </Panel>
</template>

<script>
import Panel from '@/base/Panel';

export default {
    name: 'Footor',
    data() {
        return {
            list: [
                {txt: 'Copyright © 2004-2018 京东JD.com 版权所有'},
                {txt: '投资有风险，购买需谨慎'},
                {txt: '京东金融平台服务协议'},
                {txt: '京东金融隐私政策'}
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
    .footer{
        background-color: #f5f5f5;
        ul{
            li{
                color: #999;
                font-size: .6rem;
                line-height: 1.6;
                padding: .6rem .8rem;
                text-align: center;
                @include borderBot($top: 0, $left: 0);
            }
        }
    }
</style>