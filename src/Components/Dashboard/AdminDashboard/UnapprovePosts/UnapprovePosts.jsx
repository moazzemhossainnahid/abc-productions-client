import { useEffect, useState } from 'react';
import ApprovePostModal from './Modals/ApprovePostModal';
import DeletePostModal from './Modals/DeletePostModal';
import PendingPostsRow from './PendingPostsRow';

const UnapprovePosts = () => {
    const [number, setNumber] = useState(0);
    const [posts, setPosts] = useState(null);
    const [deletePost, setDeletePost] = useState(null);
    const [unApprovePost, setUnApprovePost] = useState(null);


    useEffect(() => {
        fetch('https://abc-publications-server-ii.vercel.app/api/v1/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [number])
  

    const unapprovePost = posts?.filter(p => p?.status === 'unapprove');


    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-8 mb-20">
            <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Posts in Review: {unapprovePost?.length}</p>
                <table className="border-collapse w-full bg-slate-200">
                    {/* <!-- head --> */}
                    <thead>
                        <tr className='text-center'>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Index</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Post Titile</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Category</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Author Name</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Date</th>
                            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}

                        {
                            unapprovePost?.map((post, index) =>
                                <PendingPostsRow
                                    key={post._id}
                                    post={post}
                                    index={index}
                                    setUnApprovePost={setUnApprovePost}
                                    setDeletePost={setDeletePost}
                                ></PendingPostsRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                unApprovePost && <ApprovePostModal unApprovePost={unApprovePost} setNumber={setNumber} number={number} ></ApprovePostModal>
            }
            {
                deletePost && <DeletePostModal deletePost={deletePost} setNumber={setNumber} number={number} ></DeletePostModal>
            }

        </div>
        </div>
    );
};

export default UnapprovePosts;