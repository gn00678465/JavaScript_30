# 11 - Custom Video Player

- `<video>` - HTML 的 video 標籤是將影片插入至頁面中。
    - `controls` 屬性為預設的控制功能。

- `HTMLMediaElement` JavaScript API - 使用 JavaScript 操作 `<audio>` `<video>` 。
    <table>
      <thead>
        <tr>
          <th>method & property	</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>play()</code></td>
          <td>播放</td>
        </tr>
        <tr>
          <td><code>pause()</code></td>
          <td>暫停</td>
        </tr>
        <tr>
          <td><code>load()</code></td>
          <td>重置播放器</td>
        </tr>
        <tr>
          <td><code>paused</code></td>
          <td>影片暫停回傳 <code>true</code>，反之回傳 <code>false</code></td>
        </tr>
        <tr>
          <td><code>currentTime</code></td>
          <td>取得、設定當前播放秒數 (sec)</td>
        </tr>
        <tr>
          <td><code>duration</code></td>
          <td>影片的總播放秒數 (sec)</td>
        </tr>
        <tr>
          <td><code>skip()</code></td>
          <td></td>
        </tr>
        <tr>
          <td><code>volume</code></td>
          <td>設置媒體播放時的音量。</td>
        </tr>
        <tr>
          <td><code>playbackRate</code></td>
          <td>設置媒體播放速率。</td>
        </tr>
      </tbody>
    </table>

- event - 事件分成
    - `play` - `paused` property is changed from true to false。
    - `pause` - `paused` property is changed from false to true。
    - `timeupdate` - 當 currentTime 更新時會觸發 timeupdate 事件。

- `querySelector` - 可以寫多層
    - `document.querySelector(.play > .viewer)` === `document.querySelector(.play).querySelector('.viewer')`

- function - 將處理畫面以及處理 DOM 的 function 拆分。

- 變數帶入方法
    - 物件中讀值方式有兩種：
        1. `object.key` - 不可帶變數，只能為字串
        1. `object[key]` - 可帶變數，也可帶字串
    - JS 某些 API 也可以使用 `[]` 的方式來讓程式碼更簡潔。
        - `viedo.play()` 可以改寫為
        - ```
          const method = 條件 ? "play" : "pause";
          viedo.[method]()
          ```

- `&&` 、 `||` opeator
    - `XXX && OOO` : 當 `XXX` 條件成立時，執行 `OOO`
    - `XXX || OOO` : 當 `XXX` 條件不成立時，執行 `OOO`