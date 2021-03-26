'use strict'

const Post = use('App/Models/Post')

class FindPost {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(ctx, next) {
    
    const post = await Post.find(ctx.params.id)

    if (!post) {
      return ctx.response.status(404) 
    }
    
    ctx.post = post

    await next()
  }
}

module.exports = FindPost
