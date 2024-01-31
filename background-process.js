import { setTimeout } from "timers/promises";

console.log("we are running in the background", new Date().toISOString())

// 5 minutes
await setTimeout(300000)

console.log("done!", new Date().toISOString())
