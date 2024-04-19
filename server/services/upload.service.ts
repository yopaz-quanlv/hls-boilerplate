import { type File } from 'formidable'
import fs from 'fs'
import ffmpegService from './ffmpeg.service'
import { v4 } from 'uuid'

async function saveFile(file: File): Promise<string> {
  const filepath = file.filepath

  await fs.writeFileSync(`./public/videos/origin/${file.originalFilename}`, fs.readFileSync(filepath))

  const id = v4()

  if (await ffmpegService.encodeHls(file.filepath, id)) {
    return id
  }

  return 'error'
}

export default {
  saveFile
}
