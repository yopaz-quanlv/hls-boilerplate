import videoService from '~/server/services/video.service'

export default defineEventHandler(async (event) => {
  const videos = await videoService.getAllVideos()

  return {
    statusCode: 200,
    data: videos
  }
})
