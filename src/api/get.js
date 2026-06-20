import { Log } from "../utils/logger.js"

export class Get {
    constructor(bot, debug) {
        this.bot = bot
        this.debug = debug
    }

    async userProfilePhotos(ctx, def='') {
        try {
            const userId = ctx.from.id
            const photos = await ctx.telegram.getUserProfilePhotos(userId)
            if (this.debug) if (!def) Log.log("", "")
            if (photos.total_count === 0) {
                return def
            }
            const avatarVariants = photos.photos[0]
            const fileId = avatarVariants[avatarVariants.length - 1].file_id

            return fileId
        } catch (error) {
            console.error(error)
            return 0
        }
    }
}