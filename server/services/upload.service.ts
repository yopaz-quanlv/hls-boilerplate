import { type File } from 'formidable'
import fs from 'fs'

import ffmpegService from './ffmpeg.service'

async function saveFile(file: File, id: string): Promise<{ playListUrl: string; thumbnail: string } | string> {
  const filepath = file.filepath

  await fs.writeFileSync(`./public/videos/origin/${file.originalFilename}`, fs.readFileSync(filepath))

  const savedVideoSuccess = await ffmpegService.encodeHls(file.filepath, id)
  const savedThumbnailSuccess = await ffmpegService.generateThumbnail(file.filepath, id)

  if (savedVideoSuccess && savedThumbnailSuccess) {
    return { playListUrl: `/videos/encoded/${id}.m3u8`, thumbnail: `/thumbnails/${id}.jpg` }
  }

  return 'error'
}

export default {
  saveFile
}
