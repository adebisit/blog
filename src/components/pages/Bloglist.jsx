import { useState, useEffect } from "react"
import SingleBlogItem from "../SingleBlogItem"


function Bloglist() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const getBlogs = async () => {
            const resp = await fetch('https://wp.newborntoolkit.org/wp-json/nest360/v1/news')
            const blogs = await resp.json()
            console.log(blogs)
            setBlogs(blogs.data.posts)
        }
        getBlogs()
    }, [])

    return (
        <div>
            <div>Latest Blogs</div>
            { blogs.map((blog) => <SingleBlogItem key={blog.id} blog={blog}/>)}
        </div>
    )
}
export default Bloglist