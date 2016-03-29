import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import PostRepository from '../../repositories/post/post.repo';

export default class SinglePostViewControl extends BaseViewControl {
    templateString: string = require('./singlepost.vc.html');

    context: any = {
        post: <models.IReddit>{},
    };
    
    constructor(private postRepo: PostRepository) {
        super();
    }
    
    navigatedTo(parameters: any): void {
        this.postRepo.getSinglePost(parameters.id).then((singleFilteredData) => {
            this.context.post = singleFilteredData;
        }, (err) => {
            console.log('Err on return single ts');
            // console.log(err);
        });
    }
}

register.viewControl('singlepost-vc', SinglePostViewControl, [PostRepository]);
