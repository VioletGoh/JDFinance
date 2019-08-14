import Vue from "vue";
import Router from "vue-router";
import Home from '@/home/Home';
import MakeMoney from '@/makeMoney/MakeMoney';
import BorrowMoney from '@/borrowMoney/BorrowMoney';
import SaveMoney from '@/saveMoney/SaveMoney';
import Vip from '@/vip/Vip';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/makeMoney',
            name: 'MakeMoney',
            component: MakeMoney
        },
        {
            path: '/borrowMoney',
            name: 'BorrowMoney',
            component: BorrowMoney
        },
        {
            path: '/saveMoney',
            name: 'SaveMoney',
            component: SaveMoney
        },
        {
            path: '/vip',
            name: 'Vip',
            component: Vip
        }
    ]
});
