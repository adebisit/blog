import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
// import RenderHtml from 'react-native-render-html';


function BlogItem() {
    const [blog, setBlog] = useState({"data": null})
    const params = useParams()

    useEffect(() => {
        const getBlogItem = async () => {
            const resp = await fetch(`https://wp.newborntoolkit.org/wp-json/nest360/v1/news/${params.slug}`)
            const data = await resp.json()
            console.log(data)
            setBlog(data)
        }
        getBlogItem()
    }, [])
    
    const {category, content, date, image, title} = {...blog?.data}

    return (
        <>
            <h1>{title}</h1>
            <p>{category?.title}</p>
            <p style={{marginBottom: '20px'}}>{date}</p>
            <img className='bigImage' src={image} />
            <p>{content}</p>
            {/* <RenderHtml contentWidth={200} source={{"html": content}}/> */}
        </>
    )
}
export default BlogItem