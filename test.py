import js2py

jsf='''async function ticketNFTStore() {
  const metadata = await client.store({
    name: 'Ticket',
    description: 'Your NFT Ticket is Here!',
    image: new File(
      [
        /* data */
      ],
      'tickets/ticketsave/ticket.png',
      { type: 'image/png' }
    ),
  })
  console.log(metadata.url)
  return metadata.url
  // ipfs://bafyreib4pff766vhpbxbhjbqqnsh5emeznvujayjj4z2iu533cprgbz23m/metadata.json
}'''

res=js2py.eval_js(jsf)
print(res)