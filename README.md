[![Version](https://img.shields.io/npm/v/react-colors-picker.svg?style=flat-square&logo=npm)&nbsp;
![Downloads](https://img.shields.io/npm/dm/react-colors-picker.svg?style=flat-square&logo=npm)&nbsp;
![Total downloads](https://img.shields.io/npm/dt/react-colors-picker?style=flat-square&logo=npm)](https://www.npmjs.com/package/react-colors-picker)

# react-colors-picker


<p>
  <img src="https://raw.githubusercontent.com/sleepy-zone/react-colors/main/assets/shot.png" />
</p>

## Install

```bash
$ npm i react-colors-picker --save
```

```bash
$ yarn add react-colors-picker
```

## Basic Example

```js
import { useState } from 'react';
import { ColorsPicker } from 'react-colors-picker';

export default function App () {
  const [value, setValue] = useState({ type: 'solid', color: 'rgb(0,0,0)' });
  <ColorsPicker value={value} onChange={setValue} />
}
```