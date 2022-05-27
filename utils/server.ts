import { Application, Router } from "../deps.ts";
import { fetchUser } from "../utils/mod.ts";

export const start = async (port?: number) => {
  const router = new Router();

  router.get("/", (ctx) => {
    ctx.response.body = "Twittail API";
  });

  router.get("/:userName", async (ctx) => {
    const userName = ctx.params.userName;

    if (!userName) {
      ctx.response.status = 400;
      ctx.response.body = "User name is required";
      return;
    }

    try {
      const user = await fetchUser(userName);

      ctx.response.body = user;
    } catch (error) {
      console.error(error);

      ctx.response.status = 404;
      ctx.response.body = "User not found";
    }
  });

  const app = new Application();

  app.use(router.routes());
  app.use(router.allowedMethods());

  await app.listen({ port: port ?? 8000 });

  console.log(`Server started on http://localhost:${port}`);
};
