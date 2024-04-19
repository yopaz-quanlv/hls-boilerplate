import { prisma } from '~/prisma/db'

type CreateVideoProps = {
  title: string
  uuid: string
  playListUrl: string
  thumbnail: string
}

async function createVideo({ title, uuid, playListUrl, thumbnail }: CreateVideoProps) {
  return await prisma.video.create({
    data: {
      uuid,
      title,
      playListUrl,
      thumbnail
    }
  })
}

async function getAllVideos() {
  return await prisma.video.findMany({
    select: {
      uuid: true,
      title: true,
      thumbnail: true,
      createdAt: true
    }
  })
}

async function getVideoDetail(uuid: string) {
  return await prisma.video.findFirst({
    where: {
      uuid
    },
    select: {
      uuid: true,
      title: true,
      description: true,
      playListUrl: true,
      thumbnail: true,
      createdAt: true
    }
  })
}

export default {
  createVideo,
  getAllVideos,
  getVideoDetail
}
