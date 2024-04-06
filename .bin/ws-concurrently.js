const concurrently = require("concurrently")
const package = require("../package.json")
const args = process.argv.slice(2).join(" ");

concurrently(package.workspaces.map((workspace) => ({
    command: `npm run -w ${workspace} --if-present ${args}`,
    name: `${workspace}`
})))
