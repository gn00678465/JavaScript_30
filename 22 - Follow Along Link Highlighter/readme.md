# 22 - Follow Along Link Highlighter

## API
- **`Element.getBoundingClientRect()`** - [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
    如果要取得元素 element 「相對於視窗」的座標，可以使用
    ```js
    rectObject = object.getBoundingClientRect();
    ```
    此方法會量測元素包含 border 的大小，並回傳一個 `DOMRect` 物件，其中包含了下列屬性。
    > 此方法以視窗的左上角為原點 (0, 0)
    1. `x` / `left` ： element 左上角的 x 座標
    1. `y` / `top` ： element 左上角的 y 座標
    1. `width` ： element 的寬度，通常等於 offsetWidth
    1. `height` ： element 的高度，通常等於 offsetHeight
    1. `right` ： element 右下角的 x 座標
    1. `bottom` ： element 右下角的 y 座標

    ![](rect.png)
    - `getBoundingClientRect`是以視窗左上角為原點計算位置，為「相對座標」，當卷軸滾動時top和left屬性值就會隨之立即發生變化。
    - 座標可能是負值，當元素的頂端超出視窗頂端的範圍時，top就會變成負的。
    - 需要獲得相對於整個網頁左上角定位的屬性值，那麼只要給top、left屬性值加上當前的滾動位置（`window.scrollX` 和 `window.scrollY`）。

## event
- `mouseenter` - mouse 事件，只會在滑鼠剛進入的時候觸發。
- `mouseover` - mouse 事件，滑鼠經過綁定mouseover的當前元素以及它裡面的子元素的時候，都會觸發。(事件捕捉)
- `resize` - window 事件，當畫面大小有變化時觸發。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/22%20-%20Follow%20Along%20Link%20Highlighter/index-EXERCISE.html)