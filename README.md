# Tenderly

Учебное веб-приложение для мини-тендеров: каталог проектов, поиск, фильтры, пагинация и публикация нового тендера. Интерфейс работает локально без сборки.

## Запуск
Откройте `index.html` через любой статический сервер, например `python3 -m http.server 8080`.

## Firebase
В проект включены Firebase SDK (`firebase.js`), Firebase Hosting-конфигурация, правила Firestore и индекс по `category` + `createdAt`. После создания веб-приложения в Firebase добавьте **до** подключения `app.js` в `index.html` конфигурацию вида `window.TENDERLY_FIREBASE_CONFIG = { apiKey: '…', authDomain: '…', projectId: '…' }`.

После настройки приложение подписывается на коллекцию `tenders` с `onSnapshot`: новые тендеры сразу появляются у всех открывших каталог. Публикация записывает `title`, `category`, `budget`, `description`, `ownerId`, `createdAt` и `searchTokens` в Firestore. Коллекции проекта: `users`, `tenders`, `bids`.
