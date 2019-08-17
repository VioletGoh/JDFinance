<template>
    <div class="header">
        <i class="preIcon"></i>
        <h4>{{ title }}</h4>
        <i class="moreICon"></i>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    name: 'Heador',
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~style/element.scss';
    .header{
        height: 2.2rem;
        line-height: 2.2rem;
        display: flex;
        border-bottom: .5px solid #e5e5e5;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 9999;
        color: #333;
        background-color: #fff;
        .preIcon, .moreICon{
            width: 2.2rem;
        }
        .preIcon{
            @include backIcon;
        }
        .moreICon{
            @include more;
        }
        h4{
            flex: 1;
            font-size: .8rem;
            font-weight: 200;
            margin: 0 .5rem;
            text-align: center;
            @include txtOverflow;
        }
    }
</style>