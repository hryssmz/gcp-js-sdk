// @ts-check
import { Logging } from "@google-cloud/logging";

async function listLogEntries(logName = "my-log") {
  // Creates a client
  const logging = new Logging();
  const log = logging.log(logName);

  const [entries] = await log.getEntries({ filter: "resource.type=global" });
  const result = entries.map(({ data, metadata: { severity } }) => ({
    data,
    severity,
  }));
  return JSON.stringify(result, null, 2);
}

listLogEntries()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
