import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import PostService from '../../services/post/post.svc';

export default class PostRepository extends BaseRepository {
    
    constructor(private postSvc: PostService) {
        super();
    }
    
    getAllPosts(): async.IThenable<Array<models.IReddit>> {
        return this.postSvc.getAllPosts().then((success) => {
            let filteredData: Array<models.IReddit> = [];
            for (let i = 0; i < success.length; i++) {
                let obj: models.IReddit = {
                    id: success[i].data.id,
                    author: success[i].data.author,
                    url: success[i].data.url,
                    title: success[i].data.title
                };
                filteredData.push(obj);
            }
            return filteredData;
        });
    }
    
    getSinglePost(id: string): async.IThenable<models.IReddit> {
        console.log('getting single post');
        console.log(id);
        return this.postSvc.getAllPosts().then((success) => {
            for (let i = 0; i < success.length; i++) {
                    console.log('test');
                if (id === success[i].data.id){
                    let obj: models.IReddit = {
                    id: success[i].data.id,
                    author: success[i].data.author,
                    url: success[i].data.url,
                    title: success[i].data.title
                    };
                    return obj;
                } 
            }
        });
    }
}

register.injectable('post-repo', PostRepository, [PostService]);