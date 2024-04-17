import { IncomingMessage } from 'http'

import formidable from 'formidable'

/**
 * @param {import('http').IncomingMessage} req
 */
export default function parseBody<T>(req: IncomingMessage): Promise<T> {
  return new Promise((resolve, reject) => {
    /** @see https://github.com/node-formidable/formidable/ */
    const form = formidable({ multiples: true })

    form.parse(req, (error, fields, files) => {
      if (error) {
        reject(error)
        return
      }

      resolve({ ...fields, ...files } as T)
    })
  })
}
