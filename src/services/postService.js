const PostService = {
  getAllPosts( knex ) {
    return knex
      .from( 'posts' )
      .select( '*' )
  }
}

module.exports = PostService
