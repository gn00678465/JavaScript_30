# 26 - Stripe Follow Along Nav

-
  ```js
  setTimeout(() => {this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')},100)
  ```
  > 使用 `setTimeout` 會將 function 放置 event queue 中，待所有 function 都處理完畢再處理 event queue 內的 function 。
    - `setTimeout` 使用 function 與 Arrow function `this` 所指向不同
        1. `function` 指向 `window`
        1. `Arrow function` 指向目前的 function 或者 物件。
    - 可搭配 `&&` 運算子判斷當某條件或程式成立後再執行下一條件或程式。

- mouse event
    1.  current target
        - `mouseenter` : 定點設備（滑鼠）移動到元素上時就會觸發 mouseenter 事件。
        - `mouseleave` : 定點設備（滑鼠）離開元素時就會觸發 mouseleave 事件。
    1. target
        + `mouseover` : 類似 `mouseenter` 但會冒泡（bubble）。
        + `mouseout` : 類似 `mouseleave` 但會冒泡（bubble）。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/26%20-%20Stripe%20Follow%20Along%20Nav/index-EXERCISE.html)