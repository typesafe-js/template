const ava = require('../lib/ava')
const Util = require('../lib/util')

ava('env', async (test) => {
  const homeString = await Util.env('HOME')
  test.assert(homeString)
})

ava('sleep', async (test) => {
  await Util.sleep(1000)
})
