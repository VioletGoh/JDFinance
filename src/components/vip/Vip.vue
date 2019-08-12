<template>
    <div class="vip pubMargin">
        <Heador title="金融会员"></Heador>
        <Navbar/>
        <div>金融会员</div>
    </div>
</template>

<script>
import Heador from '@/public/Heador';

export default {
    name: "Vip",
    data() {
        return {
            
        }
    },
    components: {
        Heador
    }
};
</script>

<style lang="scss" scoped>
    .vip{
        margin: 2.25rem auto 2.5rem;
    }
</style>