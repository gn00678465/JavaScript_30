# 17 - Sort Without Articles

重點:
- `Array.sort()`
    - 預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。
    - 依瀏覽器不同可分為 1. 穩定排序、2. 不穩定排序，chrome 後期版本已經採用穩定排序。
    - 字串採用 Unicode ， 可以使用 `String.charCodeAt()` 取得字串的 unicode 。
        ```javascript
        "a" > "b"   // false
        "a".charCodeAt() > "b".charCodeAt()  // 97 > 98  // false
        ```
    - 不同長度的字串採取字元個別比較
        ```javascript
        "abc" > "abe"   //false
        "abcd" > "abc"  // true
        ```
    - `a > b ? -1 : 1`
        - 在某排序標準下 a 小於 b return - 1
        - 在某排序標準下 a 大於 b return 1

- `String.replace("","")`
    - 第一參數是比較之後替換的條件，可搭配正規表達式。
        `/^(a |the |an )/i` : 匹配以 a the an 開頭的文字，(i)不區分大小寫。
    - 第二個參數為要替換的字串

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/17%20-%20Sort%20Without%20Articles/index-EXERCISE.html)