import { type File } from 'formidable'
import { v4 } from 'uuid'

import parseBody from '../libs/parse-body'
import uploadService from '../services/upload.service'
import videoService from '../services/video.service'

export default defineEventHandler(async (event) => {
  const body = await parseBody<{ title: string[]; file: File[] }>(event.node.req)

  const uuid = v4()

  const savedVideoData = await uploadService.saveFile(body.file[0], uuid)

  // failed to save file
  if (typeof savedVideoData === 'string') {
    return {
      statusCode: 500,
      data: { message: 'Failed to save file' }
    }
  }

  const data = await videoService.createVideo({ title: body.title[0], uuid, ...savedVideoData })

  return {
    statusCode: 200,
    data
  }
})
