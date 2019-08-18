<template>
    <section :class="[panelClass, cname]">
        <h4 v-if="title">-&nbsp;{{ title }}&nbsp;-</h4>
        <h3 v-else>{{ titleLeft }}</h3>
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
        },
        titleLeft: {
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