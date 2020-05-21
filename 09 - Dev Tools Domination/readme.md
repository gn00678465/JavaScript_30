# 09 - Dev Tools Domination

- 封裝 log 工具
    > 自行封裝一個 `console` 物件當開發時 `isDev = true` 可以輸出 `console.log` ，反之則關閉。

    ```
    let console = {
      isDev: true,
      log(...args) {
        if (!this.isDev) return;
        window.console.log(...args)
      },
      warn(...args) {
        if (!this.isDev) return;
        window.console.warn(...args)
      },
      error(...args) {
        if (!this.isDev) return;
        window.console.error(...args)
      },
      assert(...args) {
        if (!this.isDev) return;
        window.console.assert(...args)
      },
      dir(...args) {
        if (!this.isDev) return;
        window.console.dir(...args)
      },
      table(...args) {
        if (!this.isDev) return;
        window.console.table(...args)
      },
      time(...args) {
        if (!this.isDev) return;
        window.console.time(...args)
      },
      timeEnd(...args) {
        if (!this.isDev) return;
        window.console.timeEnd(...args)
      }
    }
    ```

- Regular
    `console.log('字串')`
- Interpolated - 將console.log 內的字串 or 數字替換顯示。
    > 前方為要替換的區塊，後方為要替換的內容。
    - %s - 字串  `console.log(%s, 'String')`
    - %d - 數字  `console.log(%d, number)`
    - %f - 浮點數  `console.log(%f, float)`

- Styled - 於要顯示的內容前加入 `%c`，並於後方加入 CSS 樣式，可以改變 console.log 出現的樣式。

    `console.log("%c住手", 'color: red; font-size: 36px')`

- warning! - 輸出警告的 console.log

    `console.warn('警告')`
- Error - 輸出錯誤的 console.log

    `console.error('錯誤')`
- Info - 輸出info的
    > chrome 與 log 相同。

    `console.info('info')`
- Testing - 利用條件判斷要輸出的 console.log
    - 條件為 `true` 時不會輸出內容。
    - 條件為 `false` 、 `0` 、 `null` 、 `NaN` 、 `undefined` 、 `""` 則皆會輸出內容。

    `console.assert(true, "不輸出")`

    `console.assert(false, "輸出")`
- clearing - 清空 console.log 畫面

    `console.clear()`
- Viewing DOM Elements - 輸出對象的所有屬性，通過類似文件樹樣式的交互列表顯示。

    `console.dir()`
- Grouping together
    - `console.group()` - 建立一個新的分組(默認內容開啟)
    - `console.groupCollapsed()` - 建立一個新的分組(默認內容摺疊)
    - `console.groupEnd()` - 當前分組結束
    - `console.table()` - 將資料以 table 方式呈現。
- counting - 輸出 `count(label)` 被調用的次數。
    - `console.count()`
    - 有 `label`，此函數輸出為那個指定的 `label` 和 `count()` 被調用的次數。
    - `label` 被忽略，此函數輸出 `count()` 在其所處位置上被調用的次數。
- timing - 啟動一個計時器來跟蹤某一個操作的佔用時長。
    - 每一個計時器必須擁有唯一的名字。
    - `console.time()`
    - 以此計時器名字為參數調用 `console.timeEnd()` 時，瀏覽器將以毫秒為單位，輸出對應計時器所經過的時間。


[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/09%20-%20Dev%20Tools%20Domination/index-EXERCISE.html)