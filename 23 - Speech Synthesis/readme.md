# 23 - Speech Synthesis (語音合成)

## API
1. `speechSynthesis` - 語音服務的控制接口；它可以用於獲取設備上關於可用的合成聲音的信息。

    ▼ 方法
    - `getVoices()` - 返回當前設備所有可用的 `SpeechSynthesisVoice` 列表。
    - `cancel()` - 移除所有語音談話隊列中的談話。
    - `speak()` - 添加一個 *utterance* 到語音談話隊列；它將會在其他語音談話播放完之後播放。

    ▼ Event
    - `voiceschanged` - 當 `getVoices()` 返回的 `SpeechSynthesisVoice` 列表改變時觸發。
<br>

1. `SpeechSynthesisUtterance` - Web Speech API 中代表一發音的需求，此物件中包含可讓語音合成伺服器辨識的資訊，例如語言、音調、聲音、速率等。
    ▼ Property
    - `pitch` - 設定或取得發音的音調。
    - `rate` - 設定或取得發音的速度。
    - `text` - 設定或取得發音的文字內容。
    - `voice` - 設定或取得發音的聲音。