# 16 - Mouse Move Shadow

- 事件: `mousemove`
    - `client` - 
    - `offset` - 對象區塊內的 ＸＹ, (0,0) 為左上角
        > 會因為外容器改變導致座標會有變化。
    - `page`
    - `screen`

- `offset` - (0,0) 為左上角
  1. X 由左而右 0~100%
  1. Y 由上至下 0~100%
  1. 透過 X * 2 - 1 可將 X 的 0 座標 offset 至中間， Y 亦同。

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/16%20-%20Mouse%20Move%20Shadow/index-EXERCISE.html)