# HyperPlay Browser SDK

SDK for browser projects integrating with HyperPlay's Browser Platform.

## Installation

```bash
npm install @hyperplay/browser-sdk
```

# Integration

The following code snippet can be tested with the [browser-sdk-demo project](https://github.com/HyperPlay-Gaming/browser-sdk-demo).

```tsx
import { requestFullscreen } from '@hyperplay/browser-sdk'

...

  <button onClick={() => {requestFullscreen({ elementId: 'gameCanvas', setStyle: true })}}>Request Fullscreen</button>
  ...
  <div id="gameCanvas">Some Content</div>
```

Note that `requestFullscreen` will call `Element.requestFullscreen` by default if your project is not being rendered in the HyperPlay Store.
