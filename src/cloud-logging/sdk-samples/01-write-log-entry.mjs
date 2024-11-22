// @ts-check
import { Logging } from "@google-cloud/logging";

async function writeLogEntry(logName = "my-log") {
  const logging = new Logging();
  const log = logging.log(logName);

  // A text log entry
  const textEntry = log.entry("Hello world!");

  // A json log entry with additional context
  /**
   * @type {import("@google-cloud/logging/build/src/entry").LogEntry}
   */
  const metadata = {
    severity: "WARNING",
    labels: {
      foo: "bar",
    },
    resource: {
      type: "global",
    },
  };
  const message = {
    name: "King Arthur",
    quest: "Find the Holy Grail",
    favorite_color: "Blue",
  };

  const jsonEntry = log.entry(metadata, message);

  await log.write(textEntry);
  await log.write([textEntry, jsonEntry]);
}

writeLogEntry()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
