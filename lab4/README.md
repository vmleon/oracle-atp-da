# Lab 4: Implement Custom Component

Oracle Digital Assistant allows you to build integrations with backend services by creating Custom Components.

Custom Components are a bridge between Skills on Oracle Digital Assistant and the services where information can be fetched.

![Custom Component Architecture](../images/oda_cc_architecture.png)

Custom components allow you as well to plug-in custom code logic into a bot conversation.

That is exactly what we are going to build.

Custom Components are developed using Node.js. They are just a REST API that offer an endpoint to Skills bots to `GET` and `POST` actions.

![Custom Component](../images/oda_cc.png)

You can package related custom components together.

## Create a Custom Component to integrate with backend services

Oracle provides Oracle Bots Node.js SDK, a free utility that makes custom components development very easy.

### Before you start

```bash
node -v
```

```bash
npm -v
```

```bash
npx @oracle/bots-node-sdk -v
```

```bash
npx @oracle/bots-node-sdk init natter --component-name jokes
```

The result should look like this:

```bash
---------------------------------------------------------------------
Custom Component package 'natter' created successfully!
---------------------------------------------------------------------

Usage:

  cd natter
  npm start    Start a dev server with the component package
```

The new folder natter is created with this hierarchy:

```bash
natter/
├── README.md
├── components
│   └── `jokes.js`
├── main.js
├── package-lock.json
├── package.json
└── spec
    ├── test.cc.req.json
    └── test.eh.req.json
```

> Note you should also have a `node_modules` folder with all the needed dependencies.

Change directory to natter:

```bash
cd natter
```

We are going to install some other dependencies we will need soon:

```bash
npm install request
```

Good practice: Open the `package.json` file and change the name from `my-custom-component` to `natter`.

Let's take a look on `jokes.js` where we will work the most of the time:

To avoid name conflicts, change the `name` property of the `metadata` function:

```javascript
   name: 'com.example.jokes',
```

```javascript
"use strict";

const request = require("request");

const ordsURL = "<SODA_URL>/ords";
const collection = "jokes";

const username = "ADMIN";
const password = "<ADMIN_PASSOWRD>";
const authString = `${username}:${password}`;

function getJokes(urlRequest, logger, callback) {
  logger.info(urlRequest);
  try {
    request(urlRequest, { json: true }, (err, res, body) => {
      if (err) {
        logger.error(err.message);
        callback(err.message);
        return;
      }
      if (res.statusCode !== 200) {
        logger.error(`Invalid status ${res.statusCode}`);
        callback(`Invalid status ${res.statusCode}`);
        return;
      }
      callback(null, body.items);
    });
  } catch (error) {
    logger.error(err.message);
    callback(error);
  }
}

module.exports = {
  metadata: () => ({
    name: "com.example.jokes",
    supportedActions: ["success", "failure"],
  }),
  invoke: (conversation, done) => {
    const urlRequest = `https://${authString}@${ordsURL}/${username.toLowerCase()}/soda/latest/${collection}`;
    getJokes(urlRequest, conversation.logger(), (err, items) => {
      if (err) {
        conversation.transition("failure");
        done();
        return;
      }
      const values = items.map((item) => item.value);
      const jokes = values.map((v) => v.text);
      conversation
        .reply("Greetings hooman! ")
        .reply(jokes.join("\n"))
        .transition("success");
      done();
    });
  },
};

```

## Deploy the custom component

Custom Components can be deployed in different ways:

- Local Component Container: single instance deployment as custom component resides in skill bot
- Mobile Hub: multi-channel environment with mobile extras and shared instance deployment.
- Node Container: shared instance but no need for mobile extras.

Package your Custom Component

```bash
npm pack
```

The output should contain:

```bash
---------------------------------------------------------------------
Component Package 'natter' is valid!
---------------------------------------------------------------------
```

And write a file called `natter-1.0.0.tgz`.

## It works

**XXX**

Congratulations! You are ready to go to the next Lab!

---

[**<< Prev**](../lab3/README.md) | [home](../README.md) | [**NEXT >>>>>**](../lab5/README.md)
