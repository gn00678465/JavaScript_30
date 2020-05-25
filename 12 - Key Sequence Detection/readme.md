# 12 - Key Sequence Detection

- event 
    - `keyup` - 當按鍵放開才會觸發
    - `e.key` - 按鍵對應的名稱(有大小寫之分)
    - `e.keyCode` - 按鍵對應的代碼
- 比對
    - 陣列與字串 -> 可先陣列轉為字串 `arr.join()` 再使用 `includes(要比較的對象)` 比對。
    - 陣列與陣列
        1. 先將陣列轉為字串 `arr.join()` 再比對。
        2. 使用 `for` or `forEach()` 批次比對。
- 不使用判斷式限制陣列的長度
    - 使用 `arr.splice( -arr.length -1, arr.length - arr2.length)`
    1. 第一項參數為負值時，從陣列的最後一項開始算起。
    1. 第二項為負值時，此陣列不做變更。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/12%20-%20Key%20Sequence%20Detection/index-EXERCISE.html)