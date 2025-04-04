import { InjectionKey } from 'vue';

/**
 * Ключ для provide\inject функции закрытия модального окна.
 * Работает только внутри модального окна.
 */
export const closeModelInjectionKey = Symbol() as InjectionKey<() => void>;
