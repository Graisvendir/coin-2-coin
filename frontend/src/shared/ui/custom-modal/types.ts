import { InjectionKey } from 'vue';

// TODO: дропнуть файл?
/**
 * Ключ для provide\inject функции закрытия модального окна.
 * Работает только внутри модального окна.
 */
export const closeModelInjectionKey = Symbol() as InjectionKey<() => void>;
