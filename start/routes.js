'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.group(() => {
    Route.get('index', 'PostController.index').as('posts.index')  
    Route.get('create', 'PostController.create').as('posts.create')   
    Route.post('store', 'PostController.store').as('posts.store')   
    Route.get('edit/:id', 'PostController.edit').as('posts.edit').middleware(['findPost'])   
    Route.post('update/:id', 'PostController.update').as('posts.update').middleware(['findPost'])      
    Route.get('delete/:id', 'PostController.delete').as('posts.delete').middleware(['findPost'])      
  }).prefix('posts')
