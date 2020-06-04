# 20 - Speech Detection

[MDN - Speech Detection](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)

使用 Google 語音辨識服務 (Google Speech Recognition Service) 
支援度：[Can i use](https://caniuse.com/#feat=mdn-api_speechrecognition)

- `recognition.interimResults` : `true | false`
    - `true` : 即時性的辨識
    - `false` : 待一個段落後再辨識
- `recognition.lang = ''` : 要辨識的語言
    - en-US : English
    - Zh-TW : 繁體中文