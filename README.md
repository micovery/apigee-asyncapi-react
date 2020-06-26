# Apigee AsyncAPI React Wrapper

This is webpack wrapper for the official AsyncAPI react component. The idea here is that the entire AsyncApiComponent
is web-packed into a single JavaScript file. This makes it easy to embed the component into a Drupal module.


## Embedding in Drupal

When embedded in a Drupal page, the AsyncAPIComponent will use settings populated from the global `drupalSettings`.

e.g.

```javascript
window.drupalSettings = {
    asyncapi: {
        'spec-url' : 'https://raw.githubusercontent.com/asyncapi/asyncapi/master/examples/2.0.0/rpc-client.yml'
    }
};
```

## How to build it (prod)

Run the following command to do a prod build:

```shell script
npm run build:prod
```

This creates a file under `dist/js/index.js` that is minified.

## How to build it (dev)

Run the following command to do a dev build:

```shell script
npm run build:dev
```

This creates the following two files `dist/js/index.js` and `dist/js/index.js.map`.


## Testing locally

You can test the React component locally using `webpack-serve`.  To do that, run the following commands:

Make sure to install the dependencies
```shell script
npm install
```

Then, run:

```shell script
npm run start:local
```

This will bring up a web-server listening on http://localhost:9090. 

While the server is active, you can make changes live in the source code. In the background webpack-serve monitors for
local changes and automatically rebuilds and reloads the site. This is make the development process very smooth
as you do not need to be rebuilding and restarting each time.


### Not Google Product Clause

This is not an officially supported Google product.


