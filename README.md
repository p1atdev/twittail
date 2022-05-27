# Twittail

Twitter API wrapper server for getting user detail information.

## Usage

```bash
$ deno task start
```

```bash
$ curl http://localhost:8000
Twittail Server!
```

### Get user detail

`@deno_land`

```bash
$ curl http://localhost:8000/v1/deno_land
{"avatar":{"url":"https://pbs.twimg.com/profile_images/1267819337026420739/GBuq7wjs_normal.jpg","isDefaultIcon":false,"isNFT":false},"banner":{"url":"https://pbs.twimg.com/profile_banners/1108769816230293504/1629190066"},"profile":{"userName":"Deno","userId":"deno_land","userRestId":"1108769816230293504","description":"A modern runtime for JavaScript and TypeScript https://t.co/jUiP5O6TSC #deno #denoland","isVerified":true,"followersCount":48940,"fastFollowersCount":0,"normalFollowersCount":48940,"favouritesCount":512,"friends_count":0,"location":"","mediaCount":16,"listedCount":464,"isTranslator":false,"translatorType":"none","hasCustomTimelines":false,"createdAt":"Thu Mar 21 16:38:18 +0000 2019","pinnedTweetIds":[],"isProtected":false}}
```

with jq,

```bash
$ curl http://localhost:8000/v1/deno_land | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   748  100   748    0     0   1420      0 --:--:-- --:--:-- --:--:--  1432
{
  "avatar": {
    "url": "https://pbs.twimg.com/profile_images/1267819337026420739/GBuq7wjs_normal.jpg",
    "isDefaultIcon": false,
    "isNFT": false
  },
  "banner": {
    "url": "https://pbs.twimg.com/profile_banners/1108769816230293504/1629190066"
  },
  "profile": {
    "userName": "Deno",
    "userId": "deno_land",
    "userRestId": "1108769816230293504",
    "description": "A modern runtime for JavaScript and TypeScript https://t.co/jUiP5O6TSC #deno #denoland",
    "isVerified": true,
    "followersCount": 48945,
    "fastFollowersCount": 0,
    "normalFollowersCount": 48945,
    "favouritesCount": 512,
    "friends_count": 0,
    "location": "",
    "mediaCount": 16,
    "listedCount": 463,
    "isTranslator": false,
    "translatorType": "none",
    "hasCustomTimelines": false,
    "createdAt": "Thu Mar 21 16:38:18 +0000 2019",
    "pinnedTweetIds": [],
    "isProtected": false
  }
}
```
