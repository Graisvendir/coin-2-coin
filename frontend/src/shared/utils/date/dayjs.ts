/**
 * Подключать плагины для dayjs - в этом файле.
 * Использовать напрямую нельзя! Только через ./date-time.ts
 * Стараемся абстрагироваться от используемой библиотеки.
 */
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import ruLocale from 'dayjs/locale/ru';

dayjs.extend(localizedFormat);
dayjs.locale('ru', ruLocale);

export { dayjs };
