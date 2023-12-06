export default async (fastify) => {
  fastify.get("/create", (req, res) => {
    try {
      res.send({ status: 200, message: "it is working!" });
    } catch (err) {
      res.send({ status: 400, err: err.message });
    }
  });
};
