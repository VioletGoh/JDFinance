<template>
    <div class="makeMoney pubMargin">
        <Heador title="赚钱"></Heador>
        <Navbar/>
        <MSlider/>
        <MIcon/>
        <MReward/>
        <MBank/>
        <HWhitebar/>
        <MInvestment/>
    </div>
</template>

<script>
import MSlider from './pages/MSlider';
import MIcon from './pages/MIcon';
import MReward from './pages/MReward';
import MBank from './pages/MBank';
import HWhitebar from './pages/HWhitebar';
import MInvestment from './pages/MInvestment';

export default {
    name: "MakeMoney",
    data() {
        return {
            
        }
    },
    components: {
        MSlider,
        MIcon,
        MReward,
        MBank,
        HWhitebar,
        MInvestment
    }
};
</script>

<style lang="scss" scoped>
    .makeMoney{

    }
</style>