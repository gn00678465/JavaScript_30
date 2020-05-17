# Day6 Type Ahead

1. API 串接
    1. `XMLHttpRequest`  (vanilla JS)
        - 可支援 progress
    1. `fetch`  (vanilla JS)
        - 不支援 progress
    1. `axios`  (框架)
1. 資料處理
    - `replace` - `str.replace(regexp|substr, newSubstr|function)`
        - 回傳一個新字串，此新字串是透過將原字串與 `pattern` 比對，以 `replacement` 取代吻合處而生成。
        - `pattern` 可以是字串或 `RegExp`
        - `replacement` 可以是字串或函式（會在每一次匹配時被呼叫）。
    - `match` - `str.match(regexp)`
        - 搭配正規表示式(Regex)來找出字串中匹配的內容。
    - `join()` - `arr.join([separator])`
        - 將陣列（類陣列（array-like）物件）中所有的元素連接、合併成一個字串，並回傳此字串。
        - `separator` - 隔開陣列中每個元素的字串。
1. 正規表達式
    [RegExp101](https://regex101.com)
    [RegExp 教學](https://zhuanlan.zhihu.com/p/27653434)
    [案例分享](https://gitee.com/janking/Infinite-f2e/issues/IDWPH)
    [regexper圖解](https://regexper.com/)

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/06%20-%20Type%20Ahead/index-EXERCISE.html)