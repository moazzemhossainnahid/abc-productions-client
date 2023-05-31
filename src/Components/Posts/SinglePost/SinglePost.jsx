import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './styles.css';
import { Link } from 'react-router-dom';
// import { blogList } from '../../../assets/BlogData';
import Chip from '../../common/Chip';
import EmptyList from '../../common/EmptyList';

import PDFViewer from '../../Others/PDFViewer';


const SinglePost = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [pst, setPst] = useState(null);
    const [rcsPath, setRchPath] = useState('');

    useEffect(() => {
        fetch('https://attractive-shrimp.cyclic.app/api/v1/posts')
            .then(res => res.json())
            .then(data => setPst(data))
    }, [])

    useEffect(() => {
        let blog = pst?.find((blog) => blog._id === id);
        setRchPath('https://attractive-shrimp.cyclic.app/public/images/' + blog?.resource);
        if (blog) {
            setBlog(blog);
        }
    }, [pst, id]);

    // console.log(blog);
    console.log(rcsPath);

    return (
        <>
            <div className="container py-7">
                <Link className='blog-goBack w-32 rounded mx-3 justify-start px-5 py-2 flex text-indigo-600 bg-gray-200' to='/'>
                    <span> &#8592;</span> <span className='pl-2'>Go Back</span>
                </Link>
                {blog ? (
                    <div className='blog-wrap'>
                        <header>
                            <p className='blog-date'>Published {blog.createdAt}</p>
                            <h1 className='text-black dark:text-white text-2xl md:text-4xl font-bold'>{blog.title}</h1>
                            <div className='blog-subCategory'>
                                {blog.subCategory.map((category, i) => (
                                    <div key={i}>
                                        <Chip label={category} />
                                    </div>
                                ))}
                            </div>
                        </header>
                        <img src={blog.cover} alt='cover' />
                        <div className="">
                            <p className='blog-desc'>{blog.description}</p>
                            <div className="">
                            {rcsPath !== "https://attractive-shrimp.cyclic.app/public/images/undefined" && (
                                    <PDFViewer url={rcsPath} />
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <EmptyList />
                )}
            </div>
        </>
    );
};

export default SinglePost;
