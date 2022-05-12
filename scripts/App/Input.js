import { Data } from './Data.js';
import { DOMHelper } from '../Utility/DOMHelper.js';
const form = document.querySelector('#new-post form');

export class Input{

    static createPost(title, content) {
        const userId = Math.floor((Math.random()*10 + 1));
        const post = {
          title: title,
          body: content,
          userId: userId
        };
        Data.sendPost(post, DOMHelper.createPost.bind(this));
    }

    static createPostBtn(){
        form.addEventListener('submit', event => {
            event.preventDefault();
            const enteredTitle = event.currentTarget.querySelector('#title').value;
            const enteredContent = event.currentTarget.querySelector('#content').value;
            event.currentTarget.querySelector('#title').value = '';
            event.currentTarget.querySelector('#content').value = '';
            this.createPost(enteredTitle, enteredContent);
        });
    }

}