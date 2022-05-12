import { Data } from './Data.js';
import { DOMHelper } from '../Utility/DOMHelper.js';

const fetchButton = document.querySelector('#available-posts button');
export const listElement = document.querySelector('.posts');

export class List{
    constructor(){
        this.displayPostsBtn();
        this.deletePost();
    }

    displayPosts(){
        Data.fetchPosts(DOMHelper.createPost.bind(this));
    }

    displayPostsBtn(){
        fetchButton.addEventListener("click", this.displayPosts);
    }

    deletePost(){
        listElement.addEventListener('click', event => {
            const element = event.target.closest('li');
            if (event.target.tagName === 'BUTTON') {
              Data.deletePost(element, DOMHelper.removePost.bind(this));
            }
          });
          
    }

}