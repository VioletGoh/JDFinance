<template>
    <div :class="[btnClass, cname]">
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: ''
        }
    },
    name: 'Btn',
    data() {
        return {
            btnClass: 'btn'
        }
    }
}
</script>

<style lang="scss">
    @import '~style/element.scss';
    .btn{
        @include btn;
    }
</style>