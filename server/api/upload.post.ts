import { type File } from 'formidable'
import parseBody from '../libs/parse-body'
import uploadService from '../services/upload.service'

export default defineEventHandler(async (event) => {
  const body = await parseBody<{ file: File[] }>(event.node.req)

  const savedFile = await uploadService.saveFile(body.file[0])

  return {
    statusCode: 200,
    url: savedFile
  }
})
