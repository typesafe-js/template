const ava = require('@typesafejs/shared/lib/ava')
const Client = require('../lib/client')

ava('initialize', async (test) => {
  const client = new Client()
  const result = await client.initialize('unit-test')
  test.assert(result)
})
