# Fun with web

Using [preact](https://github.com/preactjs/preact)/[htm](https://github.com/developit/htm) with [oceanwind](https://github.com/lukejacksonn/oceanwind) to have access to tailwind without build time. using [wobble](https://github.com/skevy/wobble) for creating a custom [useSpring](./utils.js) to animate stuff for fun.

Using `oceanwind` means the cost of building tailwind will be on runtime so be careful in production setup.

# Let me see

It's for fun so it's not really good looking lol but here it is.

[demo](https://preact-htm-oceanwind-wobble.vercel.app/)

# Launch

No need to install or use yarn for dependencies since we are using es-modules (thank [unpkg](https://unpkg.com/)).

Use [serve](https://github.com/vercel/serve) or equivalent to boot a basic server locally.

```
$ serve
```
