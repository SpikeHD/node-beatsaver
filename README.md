![https://github.com/SpikeHD/node-beatsaver](https://img.shields.io/github/package-json/v/SpikeHD/node-beatsaver) ![https://github.com/SpikeHD/node-beatsaver](https://img.shields.io/david/SpikeHD/node-beatsaver) ![https://www.npmjs.com/package/node-beatsaver](https://img.shields.io/npm/dw/beatsaver)

# node-beatsaver
A function-based API wrapper for https://beatsaver.com

https://www.npmjs.com/package/beatsaver

# Installation

Run `npm install beatsaver` and `require` it in your project like so:
```js
const bs = require('beatsaver')
```

# Usage

All functions are async unless listed otherwise.

Jump to:
* [Functions](#functions)
* [Examples](#examples)
* [Contributing](#contributing)

# Functions

`find(query)`

Find maps by searching with a query.

| Parameter | Type |
| --------- | ---- |
| query | String |

---

`getbyHash(hash)`

Get maps details by hash string.

| Parameter | Type |
| --------- | ---- |
| hash | String |

---

`getByKey(key)`

Get map details by it's key

| Parameter | Type |
| --------- | ---- |
| key | String |

---

`getMaps(opts)`

Find maps by sort method.

| Parameter | Type |
| --------- | ---- |
| opts | Object |

### Using the `opts` object

| Key | Description | Optional? |
| --------- | ---- | --------- |
| sort | Method to sort by | Yes - defaults to 'hot' |
| page | Page to get | Yes - defaults to 1 |

### Available sort methods

* `uploader` (include `id` param in your options)
* `hot`
* `rating`
* `latest`
* `downloads`
* `plays`

---

# Examples

## Finding maps

```js
const maps = await bs.find('t+pazolite')
```

## Getting a map by hash

```js
const maps = await bs.getByHash('7f344bbf7ec69b67bd3bc9f03bae39d0b3789120')
```

## Getting a map by key

```js
const maps = await bs.getByKey('105a9')
```

## Getting maps by sorting method

Available sort methods:

* `uploader` (include `id` param in your options)
* `hot`
* `rating`
* `latest`
* `downloads`
* `plays`

Also allows page navigation.

```js
// Hot maps
const byHot = await bs.getMaps({ sort: 'hot' })

// Maps from uploader
const byUploader = await bs.getMaps({ sort: 'uploader', id: '5cff0b7698cc5a672c8544e6' })

// Second page of top rated maps
const byRating = await bs.getMaps({ sort: 'rating', page: 2 })

// Etc...
```

# Contributing
Issues, PRs, etc., are all welcome!
