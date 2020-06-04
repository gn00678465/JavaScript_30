# 21 - Geolocation

[MDN - Geolocation](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation/Using_geolocation)

- 可先測試地理位置定位是否存在
    ```js
    if ("geolocation" in navigator) {
        /* geolocation is available */
    } else {
        /* geolocation IS NOT available */
    }
    ```

- `Geolocation.getCurrentPosition()` - 方法用來獲取設備當前的位置(1次性)。
    ```js
    navigator.geolocation.getCurrentPosition(success[, error[, options]])
    ```
    1. success - 一個 callback function 會被傳入一個 Position 的物件。
    1. error - 一個 callback function 會被傳入一個PositionError 的物件。
- `Geolocation.watchPosition()` - 當使用者的裝置位置更新時，這個函式所傳入的回呼函式(callback function) 就會自動被呼叫。
    ```js
    id = navigator.geolocation.watchPosition(success[, error[, options]])
    ```
    1. success - 一個 callback function 會被傳入一個 Position 的物件。
    1. error - 一個 callback function 會被傳入一個PositionError 的物件。
    1. 此函式會回傳一組 ID 編號，此編號搭配 `Geolocation.clearWatch()` 函式，即可停止更新使用者的位置。