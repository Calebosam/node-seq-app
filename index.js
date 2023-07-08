const winston = require("winston");
const { SeqTransport } = require("@datalust/winston-seq");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.SEQ_URL);
setTimeout(() => {
  const logger = winston.createLogger({
    transports: [
      new SeqTransport({
        serverUrl: process.env.SEQ_URL,
        //   apiKey: "your-api-key",
        onError: (e) => {
          console.error(e);
        },
      }),
    ],
  });

  logger.info("This is an event message");
}, 5000);
