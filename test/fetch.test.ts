import { assertEquals } from "../deps.ts";
import { fetchUser } from "../utils/mod.ts";

Deno.test("fetch user", async () => {
  const twitter = await fetchUser("twitter");

  assertEquals(twitter.profile.userName, "Twitter");

  //   console.log(twitter);
});
