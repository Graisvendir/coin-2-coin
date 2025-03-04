<template>
    <div>
    </div>
</template>

<script setup lang="ts">

    import {useApiFetch} from '~/shared/api';

    async function getList() {
        const {response} = await useApiFetch('/cash-account').json().get();

        if (response) {
            const json = await response.value?.json();

            console.log('!!!!!! json', json); // TODO: remove console.log
        }
    }

    setInterval(() => {
        getList();
    }, 5000);
</script>
