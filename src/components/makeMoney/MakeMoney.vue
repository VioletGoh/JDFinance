<template>
    <div class="makeMoney pubMargin">
        <Heador title="赚钱"></Heador>
        <Navbar/>
        <MSlider/>
    </div>
</template>

<script>
// import Heador from '@/public/Heador';
import MSlider from './pages/MSlider';

export default {
    name: "MakeMoney",
    data() {
        return {
            
        }
    },
    components: {
        // Heador
        MSlider
    }
};
</script>

<style lang="scss" scoped>
    .makeMoney{
        // margin: 2.25rem auto 2.5rem;
    }
</style>