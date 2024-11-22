// @ts-check
import { Logging } from "@google-cloud/logging";

async function deleteLog(logName = "my-log") {
  // Creates a client
  const logging = new Logging();
  const log = logging.log(logName);

  await log.delete();
}

deleteLog()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
