import fs from 'fs'

async function encodeHls(url: string, name: string): Promise<boolean> {
  const { $ } = await import('zx')

  const outputFile = `./public/videos/encoded/${name}.m3u8`

  await $`ffmpeg -i ${url} -c:v libx264 -crf 23 -preset veryfast -c:a aac -b:a 128k -ac 2 -f hls -hls_time 4 -hls_playlist_type event ${outputFile}`

  // health check
  return fs.existsSync(outputFile)
}

export default { encodeHls }
