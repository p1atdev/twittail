import { assertEquals } from "../deps.ts";
import { Server } from "../utils/mod.ts";
import { User } from "../types/mod.ts";

const port = 8000;

Server.start(port);

Deno.test("server status should be 200 on /", async () => {
  const res = await fetch(`http://localhost:${port}`);

  const shouldBe200 = res.status;

  assertEquals(shouldBe200, 200);

  assertEquals(await res.text(), "Twittail Server!");
});

Deno.test("server status should be 200 on /twitter", async () => {
  const res = await fetch(`http://localhost:${port}/v1/twitter`);

  const shouldBe200 = res.status;

  assertEquals(shouldBe200, 200);
});

Deno.test("fetch user @deno_land", async () => {
  const res: User = await fetch(`http://localhost:${port}/v1/deno_land`).then((
    res,
  ) => res.json());

  assertEquals(res.profile.userName, "Deno");
});
