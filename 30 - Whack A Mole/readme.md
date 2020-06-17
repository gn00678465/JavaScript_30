# 30 - Whack A Mole

## 觀念
- 以往程式驅動畫面，變成，以資料驅動畫面
- Javascript proxy - [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Proxy)


## Javascript proxy

- 過往
    ```js
    let obj = {
      a: true,
      b: true
    }
    obj.a = false  // 無任何回傳 & 通知
    obj.c = false
    // Object.defineProperty 無法取得後續新增的屬性
    ```
- 新方式
    ```js
    let obj = {
      a: true,
      b: true
    }
    let objProxy = new Proxy(obj, {
      get (target, key) {
        console.log(target, key)
        return target[key]
      },
      set (target, key, value) {
        console.log(target, key, value)
        target[key] = value
      }
    })
    objProxy // Proxy {a: true, b: true}
    objProxy.a = false // {a: true, b: true} "a" false
    objProxy.c = true // {a: false, b: true} "c" true
    objProxy // Proxy {a: false, b: true, c: true}
    ```

[DEMO](https://gn00678465.github.io/JavaScript_30_exercise/30%20-%20Whack%20A%20Mole/index-EXERICESE.html)