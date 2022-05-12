import { listElement } from '../App/List.js';

const postTemplate = document.getElementById('single-post');

export class DOMHelper{

    static isEmpty(list) {
        return list.innerHTML.trim() == "";
      }

    static createPost(post){
        const postEl = document.importNode(postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toUpperCase();
        postEl.querySelector('p').textContent = post.body;
        postEl.querySelector('li').id = post.id;
        
        if(DOMHelper.isEmpty(listElement)){
            listElement.append(postEl);
        }else{
            listElement.insertBefore(postEl, listElement.children[0]);
        }

    }

    static removePost(post){
        post.parentElement.removeChild(post);
    }
}