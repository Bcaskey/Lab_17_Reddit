import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        posts: <Array<any>>[],
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    navigatedTo(): void {
        console.log('navigated to!');
        this.postRepo.getAllPosts().then((success) => {
            console.log('Posts Returned');
            console.log(success);
            this.context.posts = success;
        }, (err) => {
            console.log('Err on return home ts');
            // console.log(err);
        });
        
    }
}

register.viewControl('home-vc', HomeViewControl, [PostRepository]);
