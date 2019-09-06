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
        <HInsurance/>
    </div>
</template>

<script>
import MSlider from './pages/MSlider';
import MIcon from './pages/MIcon';
import MReward from './pages/MReward';
import MBank from './pages/MBank';
import HWhitebar from './pages/HWhitebar';
import MInvestment from './pages/MInvestment';
import HInsurance from './pages/HInsurance';

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
        MInvestment,
        HInsurance
    }
};
</script>

<style lang="scss" scoped>
    .makeMoney{

    }
</style>