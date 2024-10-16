function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    class SocialMediaPost extends Post {
        comments = [];
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let result = super.toString();
            if (this.comments.length === 0) {
                return result + `\nRating: ${this.likes - this.dislikes}`;
            }

            result += `\nRating: ${this.likes - this.dislikes}\nComments:`;
            for (let comm of this.comments) {
                result += `\n * ${comm}`;
            }
            return result;
        }
    }
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view() {
            this.views += 1;
            return this;
        }
        toString() {
            let result = super.toString() + `\nViews: ${this.views}`;
            return result;
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost,
    };
}
