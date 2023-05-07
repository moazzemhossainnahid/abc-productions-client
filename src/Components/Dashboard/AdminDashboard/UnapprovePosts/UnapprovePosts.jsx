import { useEffect, useState } from 'react';
import ApprovePostModal from './Modals/ApprovePostModal';
import DeletePostModal from './Modals/DeletePostModal';
import PendingPostsRow from './PendingPostsRow';

const UnapprovePosts = () => {
    
    const [unapprovePost, setUnapprovePost] = useState(null);
    const [deletePost, setDeletePost] = useState(null);


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/posts')
            .then(res => res.json())
            .then(data => setUnapprovePost(data))
    }, [])
  

    const umApPosts = unapprovePost?.filter(p => p?.status === 'unapprove');


    return (
        <div className=" text-left h-full w-full">

        <div className="w-full flex items-center justify-center my-12">
            <div className="bg-white shadow rounded py-12 px-8 mb-20">
            <p className="md:text-3xl text-xl font-bold pb-10 leading-7 text-center text-gray-700">Posts in Review: {umApPosts?.length}</p>
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
                            umApPosts?.map((post, index) =>
                                <PendingPostsRow
                                    key={post._id}
                                    post={post}
                                    index={index}
                                    setApproveAccount={setUnapprovePost}
                                    setDeleteAccount={setDeletePost}
                                ></PendingPostsRow>)
                        }

                    </tbody>
                </table>
            </div>

            {
                unapprovePost && <ApprovePostModal unapprovePost={unapprovePost} ></ApprovePostModal>
            }
            {
                deletePost && <DeletePostModal deletePost={deletePost} ></DeletePostModal>
            }

        </div>
        </div>
    );
};

export default UnapprovePosts;