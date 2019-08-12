<template>
    <div class="makeMoney pubMargin">
        <Heador title="赚钱"></Heador>
        <Navbar/>
        <div>赚钱</div>
    </div>
</template>

<script>
import Heador from '@/public/Heador';

export default {
    name: "MakeMoney",
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
    .makeMoney{
        // margin: 2.25rem auto 2.5rem;
    }
</style>