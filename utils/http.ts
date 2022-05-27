import {
  TwitterQLClient,
  UserByScreenName,
  UserByScreenNameParam,
  UserByScreenNameRes,
} from "../deps.ts";
import { User } from "twitterql/types/response/user_by_screen_name.ts";

export const fetchUserData = async (
  userName: string,
): Promise<User | undefined> => {
  const client = new TwitterQLClient();

  await client.setup();

  const variables: UserByScreenNameParam = {
    screen_name: userName,
  };

  const res = await client.request<UserByScreenNameRes>({
    endpoint: UserByScreenName,
    variables: variables,
  });

  return res.data.user;
};
