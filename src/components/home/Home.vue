<template>
    <div class="home pubMargin">
        <Heador title="京东金融"></Heador>
        <Navbar/>
        <HSlider/>
        <HIcon/>
        <HReward/>
        <HInsurance/>
    </div>
</template>

<script>
import HSlider from './pages/HSlider';
import HIcon from './pages/HIcon';
import HReward from './pages/HReward';
import HInsurance from './pages/HInsurance';

export default {
    name: "Home",
    data() {
        return {
            
        }
    },
    components: {
        HSlider,
        HIcon,
        HReward,
        HInsurance
    }
};
</script>

<style lang="scss">
    .home{
        // margin: 2.25rem auto 2.5rem;
    }
</style>