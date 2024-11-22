// @ts-check
import { Logging } from "@google-cloud/logging";

async function listLogs() {
  // Creates a client
  const logging = new Logging();

  const [logs] = await logging.getLogs();
  const result = logs.map(({ name }) => ({ name }));
  return JSON.stringify(result, null, 2);
}

listLogs()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
