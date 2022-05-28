import { fetchUserData } from "./http.ts"
import { Avatar, Banner, Profile, User, WebSite } from "../types/mod.ts"

export const fetchUser = async (userName: string): Promise<User> => {
    const res = await fetchUserData(userName)

    if (!res) {
        throw new Error(`User ${userName} not found`)
    }

    const avatar: Avatar = {
        url: res.result.legacy.profile_image_url_https.replace("_normal", ""), // delete _normal
        isDefaultIcon: res.result.legacy.default_profile_image,
        isNFT: res.result.has_nft_avatar,
    }

    const banner: Banner = {
        url: res.result.legacy.profile_banner_url,
    }

    const webSite: WebSite = (() => {
        try {
            const urls = res.result.legacy.entities.url.urls
            if (urls.length === 0) {
                return {
                    shortenedUrl: "",
                    expandedUrl: "",
                    displayUrl: "",
                }
            } else {
                return {
                    shortenedUrl: urls[0].url,
                    expandedUrl: urls[0].expanded_url,
                    displayUrl: urls[0].display_url,
                }
            }
        } catch {
            return {
                shortenedUrl: "",
                expandedUrl: "",
                displayUrl: "",
            }
        }
    })()

    const profile: Profile = {
        userName: res.result.legacy.name,
        userId: res.result.legacy.screen_name,
        userRestId: res.result.rest_id,
        description: res.result.legacy.description,
        profileUrl: res.result.legacy.url,
        website: webSite,
        isVerified: res.result.legacy.verified,
        followersCount: res.result.legacy.followers_count,
        fastFollowersCount: res.result.legacy.fast_followers_count,
        normalFollowersCount: res.result.legacy.normal_followers_count,
        favouritesCount: res.result.legacy.favourites_count,
        followsCount: res.result.legacy.friends_count,
        location: res.result.legacy.location,
        mediaCount: res.result.legacy.media_count,
        listedCount: res.result.legacy.listed_count,
        isTranslator: res.result.legacy.is_translator,
        translatorType: res.result.legacy.translator_type,
        hasCustomTimelines: res.result.legacy.has_custom_timelines,
        createdAt: res.result.legacy.created_at,
        pinnedTweetIds: res.result.legacy.pinned_tweet_ids_str,
        isProtected: res.result.legacy.protected,
    }

    const user: User = {
        avatar: avatar,
        banner: banner,
        profile: profile,
    }

    return user
}
