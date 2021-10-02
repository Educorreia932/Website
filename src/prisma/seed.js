const {projects} = require("./projects.js")
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

async function main() {
    for (const project of projects) {
        await prisma.project.create({
            data: project
        })
    }
}

main()
    .catch(error => {
        console.log(error)
        process.exit(1)
    })
    .finally(() => {
        prisma.$disconnect()
    })
