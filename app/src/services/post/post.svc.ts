import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class PostService extends BaseService {
    getAllPosts(): async.IAjaxThenable<Array<any>> {
        return this.http.json<Array<any>>({
            method: 'GET',
            url: this.host + '' // subdirectory here, now getting all 
        }).then((success) => {
            return success.response.data.children;
        }, (err) => {
            console.log(err);
            throw err;
        });
    }
}

register.injectable('post-svc', PostService);
