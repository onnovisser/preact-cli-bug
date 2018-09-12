# preact-cli-bug

## To reproduce

Run `npm run dev`. It shouldn't compile. In `button.js` change

```jsx
<CompWithRenderProp
    render={() => <button onClick={onClick}>Click</button>
/>
```

to

```jsx
<CompWithRenderProp
    render={() => <button onClick={() => onClick()}>Click</button>}
/>
```

or

```jsx
<CompWithRenderProp
    render={() => {
    const handler = onClick;
    return <button onClick={handler}>Click</button>;
    }}
/>
```

Now it should compile.

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and preact-render-spy
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).
