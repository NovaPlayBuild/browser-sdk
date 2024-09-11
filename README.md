# NovaPlay Browser SDK

SDK for browser projects integrating with NovaPlay's Browser Platform.

## Installation

```bash
npm install @novaplay/browser-sdk
```

# Integration

The following code snippet can be tested with the [browser-sdk-demo project](https://github.com/NovaPlay-Gaming/browser-sdk-demo).

```tsx
import { requestFullscreen } from '@novaplay/browser-sdk'

...

  <button onClick={() => {requestFullscreen({ elementId: 'gameCanvas', setStyle: true })}}>Request Fullscreen</button>
  ...
  <div id="gameCanvas">Some Content</div>
```

Note that `requestFullscreen` will call `Element.requestFullscreen` by default if your project is not being rendered in the NovaPlay Store.
