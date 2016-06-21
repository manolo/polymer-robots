A progressive application (PWA), that is PRPL ready, and that is built on the top of the Polymer library.
It only has 215 Lines of Code, and supports realtime messages which are queued when the app is offline.

Technologies used are: Polymer & Vaadin Elements, Service Workers, Pouchdb, and Cloudant.

It was initially written for my talks at the GWTCon 2015 (Florence) and the Voxxed Days 2016 (Vienna).

It follows the structure of the template PRPL project created with the `polymer-cli` tool.

Visit the live [demo](https://wc.demo.vaadin.com/robots/) to see it in action. Then, you can optionaly install the App in your main screen if you have a compatible device.

To run locally, clone the project and run:

```
  $ bower install
  $ polymer serve
```

To compile for production run:

```
  $ polymer build
```

The following command serves the minified version of the app in an unbundled state, as it would be served by a push-compatible server:

```
   $ polymer serve build/unbundled
```

Or you can serve the minified version running this command: 

```
   $ polymer serve build/bundled
```




