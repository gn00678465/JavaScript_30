使用 JavaScript 更新 CSS 原生變數藉此來改變畫面。

重點：
- CSS3 原生變數定義 & 使用
  CSS Variables 的變數定義必須定義在 CSS 選取器內，一般皆定義於 `:root` 根元素的偽類中。
    > `:root` 表示 `<html>` 元素，除了優先級更高之外，與 `html` 選擇器相同。

  - 定義：以 `--自訂名稱` 作為屬性的方式來宣告變數。
  - 使用：使用 `var(--自訂名稱)` 來取用變數的值。

- 透過 JS 修改CSS原生變數
  1. 如上所提， `:root` 與 `html` 選擇器相同，也相同於 `document.documentElement`
  
      ```
      document.querySelector(':root') === document.querySelector('html');   //true
      document.querySelector(':root') === document.documentElement;         //true
      ```
  2. 透過 `style.setProperty(propertyName, value, priority)` 此 API 修改原生變數的值。
    - `propertyName` 是一個 `DOMString` ，代表被更改的CSS屬性。EX: `--自訂名稱` 。
    - `value` 新的屬性值。如果沒有指定, 則當作空字符串。
    - `priority` 允許設置 "important" CSS 優先級。如果沒有指定, 則當作空字符串。

<a href="https://gn00678465.github.io/JavaScript_30_exercise/03%20-%20CSS%20Variables/index-EXERCISE.html" traget="_brank"><font size="6">DEMO</font></a>