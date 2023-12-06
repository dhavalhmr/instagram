import user from "./user";

export default async (fastify) => {
  fastify.register(user, { prefix: "/user" });
};
