require( 'dotenv' ).config()
const express = require( 'express' )
const morgan = require( 'morgan' )
const cors = require( 'cors' )
const helmet = require( 'helmet' )
const { NODE_ENV } = require( './config' )
const errorHandler = require( './util/errorHandler' )
// const tokenAuth = require( './tokenAuth' )
const postRouter = require( './routers/postRouter' )
const healthRouter = require( './routers/healthRouter' )

const app = express()

const morganOption = NODE_ENV === 'production'
  ? 'tiny'
  : 'common'
app.use( morgan( morganOption ) )
app.use( cors() )
app.use( helmet() )
// app.use( tokenAuth )

app.use( '/health', healthRouter )
app.use( '/api', postRouter )

app.use( errorHandler )

module.exports = app
