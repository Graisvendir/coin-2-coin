# Coin-2-coin

Приложение для учета расходов\доходов своих финансов.
Совместно с этим, полигон для обкатки новых технологий, архитектур и т.д.

## Стек технологий

Стек для фронта: Vue v3, Pinia. Сборщик Vite. Данные можно в indexedDB хранить. С базой будем работать из WebWorkers.
Есть еще идея потрогать Electron, чтоб совсем упороться 🙂
На бекенде Laravel. СУБД PostgreSQL.

## Системные требования

- docker 4.36.0. На более новых не тестили

## Установка

1. сделать `.env` файлы в папках `./docker`, `./src` и `./frontend`. Можно сделать из файла `.env.example` в каждой папке свой. Заполнить переменные окружения
2. поднять контейнеры
```bash
cd ./docker
docker compose --profile dev up --build -d
```

3. сгенерировать ключик для Laravel. TODO: запихать это как-нибудь в сборку контейнеров
```bash
docker exec app php artisan key:generate
```

Возможно, какие-то порты будут уже заняты в системе. Их надо будет поменять в `.env` файликах или в `docker/docker-compose.yml`.

С этого момента, будут работать
1. http://localhost:8080/ - фронтенд для приложения
2. http://localhost:8080/api - API для приложения

## FAQ

1. Что если мне надо залезть внутрь контейнера и что-то сделать в его терминале?

```bash
docker exec -ti app bash
```

2. Что если у меня не сохраняется авторизация?

Laravel Sanctum следит за тем, с какого домена ему шлют запрос. Если у тебя домен с портом - убедись, что Sanctum про твой порт знает. Должна быть указана в `src/env` переменная `SANCTUM_STATEFUL_DOMAINS`. Например, `SANCTUM_STATEFUL_DOMAINS=localhost:8080`

## TODO Как тут работать с проектом??

Ссылка на проект более подробное описание https://docs.google.com/document/d/1JE5RbvKvxfdpP8ihJ1N4ZYBgESqCeZ7KjSliVnmPDso/edit?usp=sharing

## Какие сущности будут

- счета. У каждого счета свои записи о расходах и доходах. При желании в выборках их можно будет объединить\разделить
- Категории. Например, аптеки, рестораны, хозяйство. Что угодно. Можно цветами помечать. Какую-нибудь еще популярность завести, чтоб долго не листать до самых необходимых
- запись о доходе или расходе. Транзакции.
  - привязка к счету, обязательна.
  - привязка к категории, не обязательна
  - сумма изменения счета, обязательна. Может быть как пополнение счета, так и списание
  - валюта?, обязательна. Если делаем валюту, то нужно будет в каждой транзакции хранить конвертацию валют
  - дата создания и дата модификации

## Экспорт данных
Выгружать точно будем в csv. Там должно быть все просто. Формат можно придумать во время разработки. Есть далеко не у всякого приложения, что по моему довольно критичный минус.

## Импорт данных
Можно бахнуть, но не приоритет. Делаем формат некоторой csv и погнали.

## Самое вкусное. Отчетики\аналитика

То, что есть у каждого похожего приложения:
– Круглишки с процентами расхода\дохода.
– Графики расхода\дохода по месяцам\неделям\дням.

Что есть уже не у каждого:
Можно упороться в математическую статистику, построить графики тренда и т.д. В общем, раскрутиться тут можно по пооооолной программе.

Можем прогнозировать, сколько денег будет к концу месяца при текущем расходе. Линия тренда как раз подойдет. Считается довольно просто. Но требует данных для определения, где-нибудь за неделю записей.

