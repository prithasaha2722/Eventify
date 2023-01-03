import { NFTStorage, File } from 'nft.storage'
const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY0MzI4OWMyOTY2RjVhMWMxNzEyNTFkYjkyNmY4NUUxN2UwRDM2MjkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MjY4MzgyNjcyNCwibmFtZSI6IkV2ZW50aWZ5X1RpY2tldHMifQ.cjSnbIMA6hiDu4pcZTGzCTrbmVkZf6XBIdPSJaZDdXc' })

async function main() {
  const metadata = await client.store({
    name: 'Batman',
    description: 'Pin is not delicious beef!',
    image: new File(
      [
        /* data */
      ],
      'asset/1207971.jpeg',
      { type: 'image/jpeg' }
    ),
  })
  console.log(metadata.url)
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}

main()