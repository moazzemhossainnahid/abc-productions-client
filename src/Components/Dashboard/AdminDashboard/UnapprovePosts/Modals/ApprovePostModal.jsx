
import { toast } from 'react-toastify';

const ApprovePostModal = ({ unApprovePost, setNumber, number }) => {

    const {title, authorName, category, status,cover,authorEmail, _id} = unApprovePost;

    // console.log(unApprovePost);


    const handleApprove = (id) =>{
        fetch(`https://attractive-shrimp.cyclic.app/api/v1/posts/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Approve Post Successfully');
                    setNumber(number + 1)
                }
            })
    }

    return (
        <>
            <div>
                <input type="checkbox" id="approve-post-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="approve-post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h1 className='mb-4 badge badge-info h-12 badge-md font-semibold text-white px-5 py-3'>Review  <span className="text-rose-700 px-2">{title}</span>'s Post</h1>
                        <div className="flex w-full mx-auto items-center justify-center h-full">
                            <div className="flex flex-col md:flex-row gap-2 items-center w-full rounded-lg bg-white shadow-lg">
                                <div className="w-4/5 p-5 md:w-3/5 mx-auto">
                                    <img className=" object-cover rounded-full" src={cover} alt="" />
                                </div>
                                <div className="p-6 w-full md:w-5/6 mx-auto flex flex-col justify-start">
                                    <h5 className="text-gray-900 text-xl font-semibold mb-2">Titile: <span className="text-green-700">{title}</span></h5>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Status: <span className=" text-xs md:text-base px-3 py-1 rounded-full bg-rose-700 text-white">{status}</span></p>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Author Name: {authorName}</p>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Category: {category}</p>
                                    <p className="text-gray-700 text-xs md:text-base font-semibold mb-4">Author Email: {authorEmail}</p>
                                </div>
                            </div>

                        </div>
                        <div className="modal-action">
                            <label htmlFor="approve-post-modal" onClick={() => handleApprove(_id)} className="btn">Approve</label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ApprovePostModal;