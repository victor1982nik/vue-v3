<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "container"
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1110px;
    margin: 0 auto;
}
</style>