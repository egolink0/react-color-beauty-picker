

# react-color-beauty-picker


<p>
  <img src="https://raw.githubusercontent.com/sleepy-zone/react-colors/main/assets/shot.png" />
</p>

## Install

```bash
$ npm i react-color-beauty-picker --save
```

```bash
$ yarn add react-color-beauty-picker
```

## Basic Example

```js
import { useState } from 'react';
import { ColorsPicker } from 'react-color-beauty-picker';

export default function App () {
  const [value, setValue] = useState({ type: 'solid', color: 'rgb(0,0,0)' });
  <ColorsPicker value={value} onChange={setValue} />
}
```