# Twittail

Twitter API wrapper server for getting user detail information.

## Usage

### As a module

```ts
import { fetchUser } from "https://deno.land/x/twittail@v0.1.0/mod.ts"

const deno_land = await fetchUser("deno_land")

console.log(deno_land)
```

### As a server

```bash
$ deno task start
```

```bash
$ curl http://localhost:8000
Twittail Server!
```

#### Verified User

`@deno_land`

```bash
$ curl http://localhost:8000/v1/deno_land
{"avatar":{"url":"https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF.jpg","isDefaultIcon":false,"isNFT":false},"banner":{"url":"https://pbs.twimg.com/profile_banners/783214/1646075315"},"profile":{"userName":"Twitter","userId":"Twitter","userRestId":"783214","description":"What's happening?!","profileUrl":"https://t.co/DAtOo6uuHk","website":{"shortenedUrl":"https://t.co/DAtOo6uuHk","expandedUrl":"https://about.twitter.com/","displayUrl":"about.twitter.com"},"isVerified":true,"followersCount":61893395,"fastFollowersCount":0,"normalFollowersCount":61893395,"favouritesCount":6237,"friends_count":0,"location":"everywhere","mediaCount":2441,"listedCount":87638,"isTranslator":false,"translatorType":"regular","hasCustomTimelines":true,"createdAt":"Tue Feb 20 14:35:54 +0000 2007","pinnedTweetIds":[],"isProtected":false}}
```

with jq,

```bash
$ curl http://localhost:8000/v1/deno_land | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   748  100   748    0     0   1420      0 --:--:-- --:--:-- --:--:--  1432
{
  "avatar": {
    "url": "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF.jpg",
    "isDefaultIcon": false,
    "isNFT": false
  },
  "banner": {
    "url": "https://pbs.twimg.com/profile_banners/783214/1646075315"
  },
  "profile": {
    "userName": "Twitter",
    "userId": "Twitter",
    "userRestId": "783214",
    "description": "What's happening?!",
    "profileUrl": "https://t.co/DAtOo6uuHk",
    "website": {
      "shortenedUrl": "https://t.co/DAtOo6uuHk",
      "expandedUrl": "https://about.twitter.com/",
      "displayUrl": "about.twitter.com"
    },
    "isVerified": true,
    "followersCount": 61893392,
    "fastFollowersCount": 0,
    "normalFollowersCount": 61893392,
    "favouritesCount": 6237,
    "friends_count": 0,
    "location": "everywhere",
    "mediaCount": 2441,
    "listedCount": 87638,
    "isTranslator": false,
    "translatorType": "regular",
    "hasCustomTimelines": true,
    "createdAt": "Tue Feb 20 14:35:54 +0000 2007",
    "pinnedTweetIds": [],
    "isProtected": false
  }
}
```

`@AKEndfieldJP`

```bash
$ curl http://localhost:8000/v1/AKEndfieldJP | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  1034  100  1034    0     0   2241      0 --:--:-- --:--:-- --:--:--  2257
{
  "avatar": {
    "url": "https://pbs.twimg.com/profile_images/1504652423574724608/XstuGxLM.jpg",
    "isDefaultIcon": false,
    "isNFT": false
  },
  "banner": {
    "url": "https://pbs.twimg.com/profile_banners/1501137618150760448/1647572069"
  },
  "profile": {
    "userName": "アークナイツ：エンドフィールド",
    "userId": "AKEndfieldJP",
    "userRestId": "1501137618150760448",
    "description": "Hypergryphが贈る3Dリアルタイム戦略RPG「アークナイツ：エンドフィールド」の公式アカウント。",
    "profileUrl": "https://t.co/jYtVt5FRYh",
    "website": {
      "shortenedUrl": "https://t.co/jYtVt5FRYh",
      "expandedUrl": "http://endfield.hypergryph.global/ja",
      "displayUrl": "endfield.hypergryph.global/ja"
    },
    "isVerified": false,
    "followersCount": 69788,
    "fastFollowersCount": 0,
    "normalFollowersCount": 69788,
    "favouritesCount": 0,
    "friends_count": 3,
    "location": "",
    "mediaCount": 5,
    "listedCount": 310,
    "isTranslator": false,
    "translatorType": "none",
    "hasCustomTimelines": false,
    "createdAt": "Tue Mar 08 10:07:58 +0000 2022",
    "pinnedTweetIds": [
      "1504653830109245466"
    ],
    "isProtected": false
  }
}
```

#### NFT Avatar User

`@TwitterBlue`

```bash
$  curl http://localhost:8000/v1/twitterblue | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   997  100   997    0     0   1894      0 --:--:-- --:--:-- --:--:--  1906
{
  "avatar": {
    "url": "https://pbs.twimg.com/profile_images/1484226604104486912/dW26JJSc.jpg",
    "isDefaultIcon": false,
    "isNFT": true
  },
  "banner": {
    "url": "https://pbs.twimg.com/profile_banners/1399766153053061121/1636475221"
  },
  "profile": {
    "userName": "Twitter Blue",
    "userId": "TwitterBlue",
    "userRestId": "1399766153053061121",
    "description": "Come on in, Twitter Blue members. Follow for a heads up on new features and to get support.",
    "profileUrl": "https://t.co/YhGUfs5vnN",
    "website": {
      "shortenedUrl": "https://t.co/YhGUfs5vnN",
      "expandedUrl": "https://help.twitter.com/using-twitter/twitter-blue",
      "displayUrl": "help.twitter.com/using-twitter/…"
    },
    "isVerified": true,
    "followersCount": 127320,
    "fastFollowersCount": 0,
    "normalFollowersCount": 127320,
    "favouritesCount": 449,
    "friends_count": 8,
    "location": "Twitter HQ",
    "mediaCount": 36,
    "listedCount": 440,
    "isTranslator": false,
    "translatorType": "none",
    "hasCustomTimelines": true,
    "createdAt": "Tue Jun 01 16:34:27 +0000 2021",
    "pinnedTweetIds": [
      "1503819454701920260"
    ],
    "isProtected": false
  }
}
```

#### Default Avatar User

`@TOS`

```bash
$ curl http://localhost:8000/v1/TOS | jq
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   625  100   625    0     0   1237      0 --:--:-- --:--:-- --:--:--  1245
{
  "avatar": {
    "url": "https://abs.twimg.com/sticky/default_profile_images/default_profile.png",
    "isDefaultIcon": true,
    "isNFT": false
  },
  "banner": {},
  "profile": {
    "userName": "TOS",
    "userId": "TOS",
    "userRestId": "12371162",
    "description": "",
    "website": {
      "shortenedUrl": "",
      "expandedUrl": "",
      "displayUrl": ""
    },
    "isVerified": false,
    "followersCount": 13057,
    "fastFollowersCount": 0,
    "normalFollowersCount": 13057,
    "favouritesCount": 0,
    "friends_count": 0,
    "location": "",
    "mediaCount": 0,
    "listedCount": 82,
    "isTranslator": false,
    "translatorType": "regular",
    "hasCustomTimelines": false,
    "createdAt": "Thu Jan 17 20:03:41 +0000 2008",
    "pinnedTweetIds": [],
    "isProtected": false
  }
}
```
