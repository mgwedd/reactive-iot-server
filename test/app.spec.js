const app = require( '../src/app' )

describe( 'Express App', () => {
  it( 'GET /health responds with 200 containing "Hello, world!"', async () => {
    const res = await supertest( app )
      .get( '/health' )
      .expect( 200 )
    expect( res.body.uptime ).to.be.above( 0 )
  } )
} )
