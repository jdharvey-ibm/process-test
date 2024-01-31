/*
1. create a script that forks a process like telem
2. make the forked process take freaking forever
3. run a ci action that invokes the script (which forks the process)
4. expect the ci action to finish quickly
*/
import childProcess from 'child_process'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

console.log('About to spawn the process')

childProcess
  .spawn(
    process.argv0,
    [
      path.join(dirname(fileURLToPath(import.meta.url)), 'background-process.js'),
      ...process.argv.slice(2)
    ],
    {
      stdio: 'ignore',
      detached: true,
      shell: true
    }
  )
  .unref()

console.log('Successfully spawned the process')
