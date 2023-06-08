
import { toast } from 'react-toastify';

const DeletePBPostModal = ({ deletePost, setNumber, number }) => {

    const { title, authorName, category, _id } = deletePost;

    const handleDelete = (id) => {
        const url = `https://abc-publications-server-ii.vercel.app/api/v1/posts/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success(`${title} post has been deleted.`);
                    setNumber(number + 1);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-post-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="delete-post-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className='mb-4 badge  badge-error text-2xl badge-lg p-4'>Delete Post</h1>
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className='my-4'>Author Name: {authorName}</p>
                    <p className='my-4'>Category: {category}</p>
                    <div className="modal-action">
                        <label htmlFor="delete-post-modal" onClick={() => handleDelete(_id)} className="btn">Delete</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeletePBPostModal;