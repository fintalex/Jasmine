Jasmine
=======

Собственно так как со временем все больше и больше появляется кода на клиенте, необходимо задумываться о тестировании кода JS. 

***Jasmine*** - фреймворк BDD (Behavior-Driven Developer - Разработка на основе поведения). 

Для того чтобы начать работу с Jasmine нам понадобиться 4 файла.

- jasmine.js - это сам фреймворк.
- jasmine-html.js - оформление результатов в виде HTML
- jasmine.css - css файл для настройки стилей отображения результатов теста
- SpecRunner.html - это тот самый файл который открываем в браузеру чтобы запустить тесты. 

---

Существуют основные ключевые слова для работы с Jasmine, и их не много

- describe -  это своеборазные области, наботы тестов, они могут быть вложенными.
- it - определяем тест внутри какого-либо набора. В одном наборе можнет быть несколько тестов.
- expect - определяет само ожидание, что мы хотим получить в тесте.

**describe** и **it** являются обычными функциями, передающими два параметра: 1-название группы или теста, 2 функция содержащая код.

---


