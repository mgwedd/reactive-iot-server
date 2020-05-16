const express = require( 'express' )

const healthRouter = express.Router()

healthRouter

  .get( '/', ( req, res, next ) => {
    const health = {
      uptime: process.uptime(),
      message: 'Service Healthy',
      timestamp: Date.now()
    }

    try {
      res
        .status( 200 )
        .json( health )
    }
    catch ( err ) {
      health.message = err
      res
        .status( 503 )
        .json( health )
    }
  } )


module.exports = healthRouter
