<template>
    <div class="home pubMargin">
        <Heador title="京东金融"></Heador>
        <Navbar/>
        <HSlider/>
        <HIcon/>
        <HReward/>
        <HInsurance/>
        <HCrowdFunding/>
        <Footor/>
    </div>
</template>

<script>
import HSlider from './pages/HSlider';
import HIcon from './pages/HIcon';
import HReward from './pages/HReward';
import HInsurance from './pages/HInsurance';
import HCrowdFunding from './pages/HCrowdFunding';

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
        HInsurance,
        HCrowdFunding
    }
};
</script>

<style lang="scss">
    .home{
    }
</style>