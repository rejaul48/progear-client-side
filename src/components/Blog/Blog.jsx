import React, { useContext } from 'react'
import { Tooltip } from 'react-tooltip';
import { SportsContext } from '../../contextApi/SportsContext';

const Blog = ({ post }) => {

    const { theme } = useContext(SportsContext)

    return (
        <>

            <section className= {`p-4 ${theme === 'dark' && 'border-2 rounded-lg'}`}>
                <div className='w-full h-[200px] overflow-hidden rounded-md'>
                    <img data-tooltip-id="my-tooltip" data-tooltip-content={post?.title} className='w-full h-full object-cover rounded-md hover:blur-sm delay-100 ease-in-out hover:scale-105' src={post?.img} alt="photo" />
                    <Tooltip id="my-tooltip" />
                </div>
                <div className='p-2'>
                    <p className='font-semibold text-sm'>{post?.category}</p>
                    <h2 className='text-xl font-bold my-2'>{post?.title}</h2>
                    <div className='flex items-center gap-4 text-gray-500'>
                        <p>{post?.post_date}</p>
                        <p>0 Comments</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Blog
