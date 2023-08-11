# To-Do List

Задание:

1. Используйте Vue.js для создания компонентов и управления состоянием приложения.
2. Интерфейс должен содержать следующие элементы:

- Поле ввода для добавления новой задачи.
- Кнопка "Добавить", чтобы добавить новую задачу в список.
- Список добавленных задач с возможностью отметить выполненные или удалить задачу.
- Опционально: добавьте кнопку "Редактировать", чтобы пользователи могли изменить текст задачи после добавления.

3. Задачи должны сохраняться в состоянии приложения и не должны исчезать после перезагрузки страницы.
4. Верстка и дизайн могут быть простыми, но должны быть читабельными и эстетичными.

Решение:

1. Создал структуру проекта, базовые компоненты.
2. Принял решение не задествовать стейт менеджеры (Pinia, Vuex) т.к. приложение маленькое, потому решил не усложнять
   (хотя при использования Pinia удобно работать с LocalStorage через персистер).
3. Сверстал все необходимые компонеты.
4. Написал логику:

- При клике на кнопку +, добавляем таски.
- Таски можно редактировать при клике на кнопку Edit.
- Если таски помечены как completed, они будут удалены через 5 секунд (если снова не поменять их состояние)
- При обвновление страницы таски сохраняются в LocalStorage

5. Готовое приложение запушил на GitHub и задеплоил.

Спасибо за челендж.

## Запуск проекта

```sh
npm install
```

### Разработка

```sh
npm run dev
```

### Продакшн

```sh
npm run build
```