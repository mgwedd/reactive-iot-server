const xss = require( 'xss' )

const serializePost = ( post ) => ( {
  id: post.id,
  title: xss( post.title ),
  summary: xss( post.summary ),
  content: xss( post.content )
} )

module.exports = serializePost
