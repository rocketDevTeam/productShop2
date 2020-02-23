import { run, events } from 'on-blow'

run()
events
  .on('start', () => console.log('user blew'))