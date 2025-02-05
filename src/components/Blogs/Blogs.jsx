import React from 'react'
import Blog from '../Blog/Blog'

const Blogs = () => {

  const postData =
    [
      {
        "img": "https://i.imgur.com/5PHW6wo.jpeg",
        "title": "Breaking News: Football Championship Finals Set",
        "category": "Sports",
        "post_date": "2024-12-07"
      },
      {
        "img": "https://i.imgur.com/Hym2tMP.jpeg",
        "title": "New Innovation in Running Shoes Revolutionizes the Market",
        "category": "Technology",
        "post_date": "2024-12-06"
      },
      {
        "img": "https://i.imgur.com/Iurju1G.jpeg",
        "title": "Basketball Star Signs Multi-Million Dollar Contract",
        "category": "Basketball",
        "post_date": "2024-12-05"
      }
    ]


  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 xl:px-0'>
        {
          postData.map((post, ind) => (
            <Blog key={ind} post={post}></Blog>
          ))
        }
      </section>
    </>
  )
}

export default Blogs
