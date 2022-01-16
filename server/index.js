import express from 'express'
import cors from 'cors'
import multer from 'multer'
import { parse } from 'csv-parse/sync'
import imageSize from 'image-size'
import axios from 'axios'
import morgan from 'morgan'

const app = express()
const upload = multer()

app.use(cors())
app.use(morgan('tiny'))
app.post('/upload', upload.single('file'), async (req, res) => {
  const images = parse(req.file.buffer, {
    columns: true,
    delimiter: ';',
    skipEmptyLines: true,
    trim: true,
  })

  const retrieveImageSizePromises = images.map(async ({ id, name, url }) => {
    try {
      const image = await axios({ url, method: 'GET', responseType: 'arraybuffer' })
      const { height, width } = imageSize(image.data)
      return {
        id,
        name,
        picture: {
          url,
          height,
          width,
        },
      }
    } catch (error) {
      return {
        id,
        name,
        errorDetails: error.message,
      }
    }
  })

  const jsonResult = (await Promise.all(retrieveImageSizePromises)).reduce(
    (acc, row) => {
      if (row.errorDetails) {
        acc.errors.push(row)
      } else {
        acc.data.push(row)
      }
      return acc
    },
    {
      data: [],
      errors: [],
    },
  )

  res.json(jsonResult)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server started on port ${port}: http://localhost:${port}`)
})
