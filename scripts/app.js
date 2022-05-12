import { List } from './App/List.js';
import { Input } from './App/Input.js';



export class App{
    static init(){
        const list = new List();
        Input.createPostBtn();
    }
}

App.init();

