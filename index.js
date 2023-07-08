const winston = require("winston");
const { SeqTransport } = require("@datalust/winston-seq");

const logger = winston.createLogger({
  transports: [
    new SeqTransport({
      serverUrl: "http://localhost:4607",
      //   apiKey: "your-api-key",
      onError: (e) => {
        console.error(e);
      },
    }),
  ],
});

logger.info("This is an event message");
