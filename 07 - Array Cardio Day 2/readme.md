# 07 - Array Cardio Day 2

重點：
1. `some` - 當陣列中其中一項符合條件時，回傳 true

1. `every` - 陣列中其中每一項符合條件時，才回傳 true

1. `find` - 回傳陣列中搜尋到的第一個元素。

1. `findIndex` - 回傳陣列中搜尋到的第一個 index。

1. `splice` - 移除、加入陣列元素。
    - 此方法會修改原始資料
    - `arr.splice(index, deleteCount, item, ...)`
    - `index` - 陣列中要開始改動的元素索引。
    - `deleteCount` - 欲刪除的原陣列元素數量的整數。
    - `item` - 要加入到陣列的元素。可為空值，表不加入元素。
1. `slice` - 原陣列選擇之 begin 至 end（不含 end）部分的淺拷貝。
    - 回傳一個新陣列物件。而原本的陣列將不會被修改。
    - `arr.slice([begin[, end]])`
    - `begin` - 自哪一個索引（起始為 0）開始提取拷貝。
    - `end` - 至哪一個索引（起始為 0）之前停止提取。`slice` 提取但不包含至索引 `end`。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/07%20-%20Array%20Cardio%20Day%202/index-EXERCISE.html)