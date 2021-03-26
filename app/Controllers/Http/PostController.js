'use strict'

const Post = use('App/Models/Post')

class PostController {
    async index({ view }) {

        const posts = await Post.all();

        return view.render('posts.index', {
            posts : posts.toJSON()
        })
    }

    async create({ view }) {
      return view.render('posts.create')
    }

    async edit({ post, view }) {
        return view.render('posts.create', { post: post })
    }
    
    async update({ request, response, post, session }) {
        
        post.title = request.input('title');
        post.body = request.input('body');
        session.flash({ notification : 'Post Updated successfully' })
        await post.save();

        return response.route('PostController.index')
    }
    
    async store({ request, response, session }) {
        
        const post = new Post()
        post.title = request.input('title');
        post.body = request.input('body');
        session.flash({ notification : 'Post added successfully' })
        await post.save();

        return response.route('PostController.index')
    }
    
    async delete({response, post, session }) {
        
        
        session.flash({ notification : 'Post Deleted successfully' })
        await post.delete();
        return response.route('PostController.index')
    } 
        
    
}

module.exports = PostController
