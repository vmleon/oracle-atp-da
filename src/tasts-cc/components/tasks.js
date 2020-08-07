"use strict";

const fetch = require("node-fetch");

const ordsURL = "XXXXXXXXXXXX-TASKS.adb.uk-london-1.oraclecloudapps.com/ords";
const collection = "tasks";

const username = "ADMIN";
const password = "<password>";
const authString = `${username}:${password}`;

function getTasks(urlRequest, logger, callback) {
  logger.info(urlRequest);
  fetch(urlRequest)
    .then((res) => {
      if (!res.ok) {
        const errorMessage = `Invalid status ${res.status}`;
        logger.error(errorMessage);
        callback(errorMessage);
        throw new Error(errorMessage);
      }
      return res.json();
    })
    .then((body) => {
      callback(null, body.items);
    })
    .catch((err) => {
      logger.error(err.message);
      callback(err.message);
    });
}

module.exports = {
  metadata: () => ({
    name: "com.example.tasks",
    supportedActions: ["success", "failure"],
  }),
  invoke: (conversation, done) => {
    const urlRequest = `https://${authString}@${ordsURL}/${username.toLowerCase()}/soda/latest/${collection}`;
    getTasks(urlRequest, conversation.logger(), (err, items) => {
      if (err) {
        conversation.transition("failure");
        done();
        return;
      }
      const values = items.map((item) => item.value);
      const tasks = values.map((v) => v.text);
      conversation.reply(tasks.join("\n")).transition("success");
      done();
    });
  },
};
