const express = require('express');
import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/list', async (req, res) => {
    const projects = await prisma.project.findMany()

    res.json(projects)
})

export default {
    path: '/projects',
    handler: app
}
