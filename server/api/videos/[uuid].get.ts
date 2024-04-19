import videoService from '~/server/services/video.service'

export default defineEventHandler(async (event) => {
  const uuid = event.path.split('/').pop()

  const video = await videoService.getVideoDetail(uuid)

  return {
    statusCode: 200,
    data: video
  }
})
