import {Link} from 'react-router-dom'

function SingleBlogItem(blog) {
    const {date, image, rating, summary, title, slug} = {...blog.blog}
    console.log(date)
    return (
        <>
            <div className="blogItem">
                <div>
                    <img src={image} />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p className="date">{date}</p>
                    <p>{summary}</p>
                    <span>{rating}</span>
                    <Link to={`/${slug}`}>Read More</Link>
                </div>
            </div>

        </>
    )
}
export default SingleBlogItem