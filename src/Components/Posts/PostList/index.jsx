import './styles.css';
import PostItem from '../PostItem/PostItem';

const PostList = ({ blogs }) => {
  console.log(blogs);
  return (
    <div className='blogList-wrap w-11/12 md:w-5-6 mx-auto pb-20'>
      {blogs?.map((blog) => (
        <PostItem key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default PostList;
