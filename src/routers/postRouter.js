const express = require( 'express' )
const logger = require( '../util/logger' )
const serializePost = require( '../util/serializePost' )


const PostService = require( '../services/postService' )
const BodyParser = express.json()
const PostRouter = express.Router()

PostRouter

  .route( '/post' )

  .get( async ( req, res, next ) => {

    const KnexInstance = req.app.get( 'db' )
    try {
      const posts = await PostService.getAllPosts( KnexInstance )
      await res.json( posts )
    } catch ( err ) {
      next( err )
    }
  } )
