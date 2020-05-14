# Day 2：CSS + JS Clock

1. 使用 JavaScript 取得當前時間。
1. 使用當前的時間計算時鐘指針的角度。
1. 透過 JS 將以計算出來的角度套用至畫面上。

<font size="4"><b>重點：</b></font>
- 計時器
  <ol>
    <li>
      <dl>
        <dt><code>setTimeout()</code></dt>
        <dd>設定延遲時間，執行一次</dd>
      </dl>
    </li>
    <li>
      <dt><code>setInterval()</code></dt>
      <dd>設定間隔時間，重覆執行</dd>
    </li>
    <li>
      <dt><code>window.requestAnimationFrame()</code></dt>
      <dd>瀏覽器於下次重繪畫面前呼叫特定函數更新動畫。</dd>
    </li>
  </ol>
- 時間計算
  - 使用 `new Date()` 來取得當前時間。
  - `getHours()` 取得當前的小時(12小時制)
  - `getMinutes()` 取得當前的分
  - `getSeconds()` 取得當前的秒
- 角度計算
  - 小時：( 360 / 12) + (30 / 60)
    > 1 小時約 30度 + 30 度另外分成 60 分鐘讓時針有中間的移動，而移動多少依照目前的分鐘
  - 分鐘：(360 / 60) + (6 / 30)
    > 1 分鐘約 6度 + 6度分成60秒鐘的分針的角度，而移動多少依照目前的秒鐘
  - 秒鐘：(360 / 60)
    > 1 秒鐘約6度