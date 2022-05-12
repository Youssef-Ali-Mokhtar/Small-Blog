export class Data{

    static async fetchPosts(DOMcb) {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            const listOfPosts = response.data;
            for (const post of listOfPosts) {
                DOMcb(post);
            }

        } catch (error) {
            alert(error.message);
            console.log(error.response);
        }
    }

    static async sendPost(post, DOMcb) {
        try{
            const response = await axios.post(
                'https://jsonplaceholder.typicode.com/posts',
                post
                );
                DOMcb(post);
        }catch(error){
            alert(error.message);
            console.log(error.response);
        }

    }

    static async deletePost(post, DOMcb){
        try{
            const response = await axios.delete(
                `https://jsonplaceholder.typicode.com/posts/${post.id}`
                );
                DOMcb(post);
            
        }catch(error){
            alert(error.message);
            console.log(error.response);
        }
    }
}