import express from 'express'
import { execSync } from 'child_process'
import fs from 'fs'
import cors from 'cors'

let app = express()

app.use(express.json())
app.use(cors())

app.post('/compile', async (req, res, next) => {
    try {
    let url = req?.body?.url
    let response = await fetch(url)
    let content = await response.text()
    fs.writeFileSync('./src/component.vue', content)
    execSync('npm run build')
    let results = fs.readFileSync('./dist/component.js')
    res.send(results)
    } catch(e) {
        next(e)
    }
})

app.listen(3000)