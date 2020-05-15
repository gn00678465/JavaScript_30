# Day 4：Array Cardio Day 1

熟悉陣列的應用。

`console.table()` 將資料以 table 方式印出至 console 上。

重點：
- `filter`
  處理陣列中資料並將符合條件的項目取出，且回傳一個新陣列。

- `map`
  處理陣列中每一項資料，且回傳一個新陣列。

- `sort`
  帶入兩個參數，針對兩個參數比較並排序，且回傳一個新陣列。
  - 兩個參數比較 `sort((a, b) => {a - b})` (數值相減比較方式)。
    1. `<0` a 擺前方
    1. `==0` a b 順序不便
    1. `>0` b 擺前方
  - 兩個參數比較 `sort((a, b) => {a > b})` (數值直接比較方式)。
    1. `-1` a 擺前方
    1. `0` a b 順序不便
    1. `1` b 擺前方
  - `sort` 有穩定排序 & 不穩定排序兩種，因目前設備效能足夠，故多數已使用穩定排序。
  - `sort` 預設採用 ASCII 排序。
- `reduce`
  對陣列中的每一個元素，由左至右傳入指定的函數，最後返回一個累加 (accumulator) 的值。
  ```
  ary.reduce(callback[,initialValue])
  ```
  - callback 一個函數，可傳入的參數分別為
    - 參數 `accumulator` 表示目前的累加值，一開始的預設值是 initialValue，接下來的 accumulator 值就是每一次函數執行後返回的結果
    - 參數 `currentValue` 表示目前執行到的元素值
    - 參數 `currentIndex` 表示目前執行到的元素的索引值
    - 參數 `array` 表示陣列本身
  - initialValue - 初始值。
    EX:
    ```
    arr = [1,2,3,4,5];
    arr.reduce((accum, current) => { return accum + current}, 0)
    // 1 -> accum = 0, current = 1
    // 2 -> accum = 0 + 1 ,current = 2
    // 3 -> accum = 0 + 1 +2, current = 3
    // 4 -> accum = 0 + 1 + 2 + 3, current = 4
    // 5 -> accum = 0 + 1 + 2 + 3 + 4, current = 5
    // 6 -> accum = 0 + 1 + 2 + 3 + 4 + 5  => 15
    ```
    - 初始值不一定只能數值，也可以傳物件。
    ```
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    const newData = data.reduce((obj, item) => {
      if (!obj[item]) obj[item] = 0;
      obj[item] += 1
      return obj
    }, {})
    ```

<a href="https://gn00678465.github.io/JavaScript_30_exercise/04%20-%20Array%20Cardio%20Day%201/index-EXERCISE.html" traget="_brank"><font size="6">DEMO</font></a>

