# Consilium Hospites

Добро пожаловать в **Consilium Hospites** — приложение на React, использующее Vite для сборки, Bun для управления зависимостями и выполнения скриптов, а также Husky для настройки Git-хуков.

![consilium-hospites](public\logo.gif "Consilium Hospites")

## Содержание

- [Технологии](#технологии)
- [Установка](#установка)
- [Скрипты](#скрипты)
- [Husky (Git Hooks)](#husky-git-hooks)
- [Структура проекта](#структура-проекта)
- [Лицензия](#лицензия)

---

## Технологии

- **React** — фронтенд-фреймворк.
- **Vite** — современный инструмент для сборки и разработки, обеспечивающий быструю загрузку и HMR.
- **Bun** — альтернатива Node.js/npm для управления зависимостями и выполнения скриптов.
- **Husky** — инструмент для настройки Git-хуков (например, для запуска тестов или линтинга перед коммитом).

---

## Установка

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/username/consilium-hospites.git
   ```

2. **Перейдите в директорию проекта**:
    ```bash
    cd consilium-hospites
   ```

3. **Установите зависимости с помощью Bun**:
    ```bash
    bun install
   ```

4. **Инициализируйте Husky**:
   ```bash
    bun add -d husky
   ```

   Затем выполните:
    ```bash
    bun run prepare
    ```
   `Это создаст папку .husky (если она отсутствует) и настроит Git-хуки для вашего проекта.`

## Скрипты

### Ниже приведён список стандартных скриптов, которые можно выполнять через Bun:
```bash
   bun run dev
   ```
   Запускает приложение в режиме разработки с использованием Vite.

   Откройте <http://localhost:3000>(порт может быть другим в зависимости от конфигурации).

```bash
   bun run build
  ```
   Создаёт оптимизированную сборку приложения для продакшена в папке dist/.

```bash
   bun run preview
  ```
   Предоставляет предпросмотр продакшн-сборки с использованием Vite.

```bash
   bun run lint:fix
  ```
   Запускает линтер для проверки кода (ESLint).

   _Примечание_: Если вы привыкли к командам npm, большинство скриптов можно запускать аналогично с использованием `bun run`

## Husky (Git Hooks)
В проекте используется Husky для автоматизации задач с помощью Git-хуков:

- Папка .husky/ — содержит скрипты Git-хуков (например, `pre-commit`, `pre-push` и т.д.).
- Чтобы добавить новый хук, используйте команду:
   ```bash
   bun exec husky add .husky/<hook-name> "команда"
   ```
  
- Например, чтобы добавить хук для предварительного тестирования перед коммитом:
   ```bash
   bun exec husky add .husky/pre-commit "bun run test"
   ```
- Убедитесь, что скрипт prepare в package.json настроен для инициализации Husky:
   ```json
    {
      "scripts": {
        "prepare": "husky install"
      }
    }
   ```

## Структура проекта

Примерная структура проекта:

```
consilium-hospites/
├─ .husky/                  # Git-хуки (например, pre-commit, pre-push)
├─ public/                  # Публичные файлы (index.html и т.д.)
├─ src/                     # Исходный код приложения (компоненты, страницы, стили и т.д.)
│   ├─ components/
│   ├─ pages/
│   ├─ App.jsx
│   └─ main.jsx             # Точка входа для Vite
├─ package.json
├─ vite.config.js           # Конфигурация Vite
├─ README.md                # Этот файл
└─ ...
```

`src/` — основная папка с кодом приложения.

`public/` — содержит статические файлы, такие как HTML-шаблоны и изображения.

`vite.config.js` — файл конфигурации для Vite.
