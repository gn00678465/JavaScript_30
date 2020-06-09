# 24 - Sticky Nav

- `HTMLElement.offset-` 皆為 read-only 屬性
    - `offsetTop` : 表示Element上邊距離與offsetParent上邊界距離
    - `offsetLeft` : 表示Element左邊距離與offsetParent左邊界距離
    - `offsetParent`
        - 往上尋找 position 不為 `static` 的第一個祖先節點。
        - 往上尋找第一個 `TABLE` / `TH` / `TD` 節點。
        - 承1,2，如果沒有找到則為 `BODY` 。
        - 如果Element本身為 `fixed` ，則為 `null。`
        - 文件根節點和BODY的offsetParent為null。
    - `offsetWidth` : Element佔用的寬度不包含 magin 的部分。
      > `width + padding + border`
    - `offsetHeight` : Element佔用的高度不包含 magin 的部分
      > `height + padding + border`

- `Element.client-` 皆為 read-only 屬性
    - `clientWidth` : 表示Element實際上可視的區塊寬度，不包含 border & magin & 垂直卷軸寬度(存在的情況)的部分。
      > `clientWidth = width + padding - 垂直卷軸寬度`
    - `clientHeight` : 表示Element實際上可視的區塊高度，不包含 border & magin & 水平卷軸高度(存在的情況)的部分。
      > `clientHeight = width + padding - 水平卷軸高度`
    - `clientLeft` : 表示可視區左邊界與border左邊界的距離，基本上相當於左邊border的寬度
      > `clientLeft = border-left-width`
    - `clientTop` : 表示可視區上邊界與border上邊界的距離，基本上相當於上方border的寬度。
      > `clientTop = border-top-width`

- `window.scroll`
    - `window.scrollX` : 返回文檔/頁面水平方向滾動的像素值。
    - `window.scrollY` : 返回文檔/頁面垂直方向滾動的像素值。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/24%20-%20Sticky%20Nav/index-EXERCISE.html)