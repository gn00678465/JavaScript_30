# JavaScript 30 : Day 1

1. 當鍵盤按下時會觸發事件發出聲音，同時相對應的按鍵新增 style。
1. 如果重複性按下相同的按鍵時，聲音會立刻重複播放。
1. 當按鍵 style 變化 transition 效果結束後將新增的 style 移除。

重點：
<table>
  <tr>
    <th><cdde>audio.currentTime = 0</cdde></th>
    <td>聲音會重頭開始播放</td>
  </tr>
  <tr>
    <th><code>audio.play()</code></th>
    <td>播放聲音</td>
  </tr>
  <tr>
    <th>事件名：<code>keydown</code></th>
    <td>當按下對應的按鍵時執行 function</td>
  </tr>
  <tr>
    <th>事件名：<code>transitionend</code></th>
    <td>當 transitioin 效果結束後執行 function</td>
  </tr>
</table>