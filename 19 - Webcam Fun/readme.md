# 19 - Webcam Fun

- 
    ```js
    navigator.mediaDevices.getUserMedia({ constraints })
    .then(function(mediaStream) { 
        HTMLMediaElement.srcObject = MediaStream
     })
    ```
    - getUserMedia API為使用者提供訪問硬體裝置媒體（攝像頭、視訊、音訊、地理位置等）的介面，基於該介面，開發者可以在不依賴任何瀏覽器外掛的條件下訪問硬體媒體裝置。
    - 如果使用者給予許可，就返回一個Promise物件， `MediaStream` 物件作為此Promise物件的Resolved［成功］狀態的回撥函式引數
    - containers  `{ audio: true, video: true }`：指定請求的媒體型別，主要包含 video 和 audio 。
    - 
        `HTMLMediaElement.srcObject = MediaStream`
        > srcObject 屬性設定或返回一個對象，這個對象提供了一個與HTMLMediaElement關聯的媒體源，可以為 `MediaStream` 、 `Blob` 或者 `File`。
- 
    ```js
    const ctx = canvas.getContext('2d')
    video.addEventListener('canplay', function () {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
    });
    ```
    - 
        ```js
        ctx.drawImage(image, sx, sy, width, height)
        ```
        取得HTMLImageElement物件或其他畫布元素的參照(reference)作為來源，用 `drawImage()`函數在畫布上畫影像。
        - `image` : 繪製到上下文的元素。
        - `sx` : 需要繪製到目標的左上角 X 軸坐標。
        - `sy` : 需要繪製到目標的左上角 Y 軸坐標。
        - `width` : 需要繪製到目標的寬度。
        - `height` : 需要繪製到目標的高度。
    - 
        ```js
        ctx.getImageData(sx, sy, width, height)
        ```
        使用getImageData()這個方法，去取得canvas內容中ImageData 物件的資料含pixel 數據(data)。
        > `pixels.data` 此為一個陣列，每一個像素會被拆分為4個，分別代表 r:[0] g:[1] b:[2] a:[3] ，使用迴圈需特別注意。
        > `pixels.data.lengh` 此陣列的長度為像素面積的 4 倍。
        > r g b a 範圍為 0 ~ 255。
- 
    ```js
    function tackPhoto () {
        const data = canvas.toDataURL('image/jpeg');
    }
    ```
    - 
        ```js
        canvas.toDataURL(type, encoderOptions);
        ```
        方法回傳含有圖像和參數設置特定格式的 data URIs。 回傳的圖像解析度為 96 dpi。
        - `type` :圖像格式的 DOMString. 預設為 image/png.
        - `encoderOptions` : 表示 `image/jpeg` 或是 `image/webp` 的圖像品質, 為0 到 1 之間的 Number。如果值不在上述範圍中, 將會使用預設值。