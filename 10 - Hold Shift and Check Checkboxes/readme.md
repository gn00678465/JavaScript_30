# 10 - Hold Shift and Check Checkboxes

- 陣列與類陣列
    - `document.querySelectorAll()` 所產生的為 NodeList 類陣列，可以透過 `Array.from()` 將之轉為陣列。

- 事件(event)
    - 滑鼠事件中的參數除了有位置的資訊之外，還有
    - `altKey` 、 `ctrlKey` 、 `shiftKey` 預設皆為 false，一旦按下對應的按鍵並執行事件時，相對應的值便會變為 true。
    - 可用來判斷是否有按下 alt 、 ctrl 、 shift 等的按鍵。

- 數值比較 - 當有兩個值須比較，但不能確定何者為大，何者為小時，可使用
    - `Math.min()` - 取得比較數中最小值
    - `Math.max()` - 取得比較數中最大值

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/10%20-%20Hold%20Shift%20and%20Check%20Checkboxes/index-EXERCISE.html)