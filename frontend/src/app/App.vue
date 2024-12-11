<template>
    <RouterView v-slot="{ Component }">
        <transition mode="out-in" name="fade">
            <component :is="Component" />
        </transition>
    </RouterView>
</template>

<script setup lang="ts">
    import '../shared/common.css';
</script>

<style>
</style>

