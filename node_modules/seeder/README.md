seeder.js
=========

Seed your MongoDB database easily

Install
-------

```shell
npm -g install seeder # to use it as a standalone CLI
npm install seeder # to use it as an api
```

Usage
-----

### CLI

```

  Usage: seeder [options]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -m, --models <dir>  models directory
    -s, --seeds <dir>   seeds directory
    -q, --quiet         quiet mode
    --mongo-url [url]   mongo database url (can be replaced with the MONGO_URL env variable)
```

Works with a seed directory like this one:

```
seeds/
  cat/ # For the Cat model
    5252ce4ce4cfcd16f55cfa3d.json # For the 5252ce4ce4cfcd16f55cfa3d document
  access-token/ # For the AccessToken model
    ...
  ...
```

Each document needs a precise ID + a JSON containing the other attributes.

### API

```javascript
var seeder = require('seeder');
var mongoose = require('mongoose');

var seedObjects = {
  cat: {
    "5252ce4ce4cfcd16f55cfa3d": {
      name: "Bobby"
    }
  }
};

mongoose.connect("mongodb://localhost/test");
mongoose.connection.on('open', function mongooseOpen(err) {
  if(err) {
    throw err;
  }
  seeder(seedObjects, mongoose, console.log, function done(err) {
    if(err) {
      throw err;
    }
    console.log("  Done !");
  });
});
```

Author
------

* Robin Ricard
