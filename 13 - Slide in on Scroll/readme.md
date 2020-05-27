# 13 - Slide in on Scroll

- 卷軸事件
    - `scroll` - 跟卷軸有關的事件(連續處發型的事件)
    - `mousewheel` - 單純與滑鼠滾輪有關的事件
- `window.scroll`
    - 有分為 X 與 Y 方向
    - Y 方向的卷軸頂端為 0 `window.scrollY`
    - 計算卷軸最底部方式為
        - 視窗高度 + 卷軸頂端座標
        - `window.innerHeight + window.scroll`
- `window.scrollTo(x, y)`
    - 將卷軸移動至指定位置


- `debounce(fun, wait, immediate)` - 過濾連續型的事件，延遲執行觸發的事件
    ```
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
    ```
    - `fun` - 要延遲執行的 function
    - `wait` - 延遲的時間
    - `immediate` - 第一次是否直接執行 true || false

- 觀念
    - `call`
        - 使用方法是 `fn.call(this, arg1, arg2..., argn)`
        - 第一個參數：輸入的物件會被指定為目標函式中的 `this`
        - 第二以後的參數：作為參數傳進目標函式中
    - `apply`
        - 使用方法是 `fn.apply(this, [arg1, arg2..., argn])`
        - 第一個參數：輸入的物件會被指定為目標函式中的 `this`
        - 第二個參數：必須為陣列，會把陣列中的每個元素作為參數傳進目標函式中
    - 閉包(closure) - 將參數封閉於 function 內，類似於 private 參數。

- 參考
    - [實例解析防抖動（Debouncing）和節流閥（Throttling）](https://jinlong.github.io/2016/04/24/Debouncing-and-Throttling-Explained-Through-Examples/)

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/http://127.0.0.1:5500/13%20-%20Slide%20in%20on%20Scroll/index-EXERCISE.html)