import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {
    
    constructor(private postSvc: PostService) {
        super();
    }
    
    getAllPosts(): async.IThenable<Array<any>> {
        return this.postSvc.getAllPosts();
    }
   
}

register.injectable('post-repo', PostRepository, [PostService]);