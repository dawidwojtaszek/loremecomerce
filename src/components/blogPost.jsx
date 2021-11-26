import React from "react";
import Post from "../style/blog/post";
const BlogPost = ({ title, body, id }) => {

    return (
        <Post>
            <Post.ImageBox>
                <Post.Img src={`https://picsum.photos/600/400?random=${id}}`} />
            </Post.ImageBox>
            <Post.Info>
                <Post.Title>{title}</Post.Title>
                <Post.BodyBox>
                    <Post.Body>
                        {body}
                    </Post.Body>
                </Post.BodyBox>
            </Post.Info>
        </Post>
    )
}

export default BlogPost;