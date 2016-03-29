import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';
import SinglePostViewControl from '../singlepost/singlepost.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context = {
        posts: <Array<any>>[],
        id: '',
        singleView: SinglePostViewControl
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    navigatedTo(): void {
        this.postRepo.getAllPosts().then((filteredData) => {
            this.context.posts = filteredData;
        }, (err) => {
            console.log('Err on return home ts');
            // console.log(err);
        });
    }
    
    SinglePost(id: string): void {
        this.navigator.navigate('singlepost-vc', {
            parameters: {
                id: id
            }
        });
    }
}

register.viewControl('home-vc', HomeViewControl, [PostRepository]);
