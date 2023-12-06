import "dotenv/config";
import fastify from "fastify";
import { config } from "./config";
import router from "./router";

const port = config.port || 2000;
const app = fastify({ logger: true });

router(app);
app.listen({ port }, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening on http://localhost:${port}`);
});
