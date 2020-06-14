# 27 - Click and Drag

## Drag
- Drag 效果可分為3個階段
    1. 開始 : `mousedown`
        - 當按下滑鼠時，紀錄目前按下的座標 startPosition (`e.pageX` || `e.offsetX`)
        - 紀錄當前的 scrooll 座標 startScroll (`targe.screllLeft`)
    1. 拖曳 : `mousemove`
        - 滑鼠進行移動時，更新目前座標 nowPosition (`e.pageX` || `e.offsetX`)
        - 移動的距離 `move = nowPosition - startPosition`
        - 移動 scroll : `targe.screllLeft = startScroll - move` (依狀況可調整倍率)
    1. 結束 : `mouseup` && `mouseleave`

## swip
- swip 效果類似於 Drag
    1. 開始 : `mousedown`
        - 當按下滑鼠時，紀錄目前按下的座標 startPosition (`e.pageX` || `e.offsetX`)
        - 當按下滑鼠時，紀錄目前時間 `startTime = new Date().getTime()`
    1. 結束 : `mouseup` && `mouseleave`
        - 當放開時，計算經過時間小於自定義時間(毫秒)並判斷
          ```js
          if ((new Date().getTime() - startTime) <= 750) {
            if (e.pageX > startX) { console.log('swip left') }
            else if (e.pageX < startX) { console.log('swip right') }
          }
          ```
        - `e.pageX > startX` : `e.pageX`當前座標大於 `startX`按下座標，判斷往左滑動
        - `e.pageX < startX` : `e.pageX`當前座標小於 `startX`按下座標， 判斷往右滑動

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/27%20-%20Click%20and%20Drag/index-EXERCISE.html)