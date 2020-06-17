# 29 - Countdown Timer

- 計時器
    - `const time = setTimeout(function() {}, 1000)`
      > 設定延遲時間，執行一次
      - `clearTimeout(time)`
        > 清除計時器
    - `const time = setInterval(function() {}, 1000)`
      > 設定間隔時間，重覆執行
      - `clearInterval(time)`
        > 清除計時器
      - 間隔時間可設定為 `1000 / 60` ，代表 1 秒鐘 螢幕畫面更新 60 次(60FPS)
    - `const time = window.requestAnimationFrame(function() {})`
      > 瀏覽器於下次重繪畫面前呼叫特定函數更新動畫，間隔時間為硬體的畫面更新率。
      - `window.cancelAnimationFrame(time)`
        > 清除計時器

- `String` 轉型至 `Number`
    1. `String * 1`
    1. `parseInt(String)`
    - 字串型別的數字會轉為數字型別，反之為 NaN。

- 選取表單方法
    1. `document.querySelector('selector')`
        - selector 為 表單的 class || id
    1. `document.FormName`
        - FormName 為表單的 name 屬性。
    - 使用 submit 事件偵聽
      ```js
      .addEventListener('submit', function(e){
        this.name.value
        // 可以取得此表單內部 input 對應 name 屬性的值。
        this.reset()
        // 清除表單內容。
      })
      ```

- 技巧 : switchMap
    - 一般寫法
      > 存在著不好解讀的問題
        ```js
        function test (aa) {
          switch (aa) {
            case 1 :
                A()
              break;
            case 2 :
                B()
              break;
            case 3 :
                C()
              break;
            default :
              D()
              break;
          }
        }
        ```
    - switchMap
      > 搭配判斷式
      ```js
      const switchMap = {
        1: A(),
        2: B(),
        3: C()
      }
      function test (aa) {
        if (switchMap[aa]) switchMap[aa]()
        else D()
      }
      ```

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/29%20-%20Countdown%20Timer/index.html)