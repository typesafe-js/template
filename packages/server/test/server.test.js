const ava = require('@typesafejs/shared/lib/ava')
const Server = require('../lib/server')

ava('initialize', async (test) => {
  const server = new Server()
  const result = await server.initialize('UNIT-TEST')
  test.assert(result)
})
