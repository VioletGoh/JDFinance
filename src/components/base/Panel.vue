<template>
    <section :class="[panelClass, cname]">
        <h4>-&nbsp;{{ title }}&nbsp;-</h4>
        <slot/>
    </section>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    name: 'Panel',
    data() {
        return {
            panelClass: 'panel'
        }
    }
}
</script>

<style lang="scss">
    @import '~style/element.scss';
    .panel{
        @include panel;
    }
</style>