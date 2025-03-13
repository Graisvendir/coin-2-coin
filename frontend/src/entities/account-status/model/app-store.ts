import {defineStore} from 'pinia';
import {ref, watch} from 'vue';

export const useAppStore = defineStore('app', () => {
    const isReady = ref<boolean>(false);
    const minReadyTime: number = 1000;

    function waitReady(): Promise<void> {
        return new Promise(resolve => {
            watch(isReady, () => {
                if (isReady.value) {
                    resolve();
                }
            }, {immediate: true});
        });
    }

    function ready() {
        if (performance.now() > minReadyTime) {
            isReady.value = true;

            return;
        }

        setTimeout(() => {
            isReady.value = true;
        }, Math.max(0, minReadyTime - performance.now()));
    }

    return {
        isReady,

        ready,
        waitReady,
    };
});
