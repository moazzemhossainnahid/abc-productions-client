
import { Link } from 'react-router-dom';
import Chip from '../../common/Chip';
import './styles.css';
import PropTypes from 'prop-types';
import {FaAngleRight} from 'react-icons/fa'

const PostItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    _id,
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <img className='blogItem-cover rounded' src={cover} alt='cover' />
      {/* <Chip label={category} /> */}
      <h3 className='text-xl text-gray-700 md:text-2xl font-bold text-start'>{title}</h3>
      {/* <p className='blogItem-desc text-start pb-7'>{description?.slice(0,120)}</p> */}
      <footer className='-mt-3'>
        {/* <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className='blogItem-link text-xl' to={`/post/${_id}`}>
            ➝
          </Link> */}
        <div className="">
          <Link className='blogItem-link text-gray-500  text-xl group flex items-center gap-2' to={`/post/${_id}`}>
            Read More <FaAngleRight className="mt-1 group-hover:translate-x-3 duration-300 ease-in-out"/>
          </Link>
        </div>
      </footer>
    </div>
  );
};

PostItem.propTypes = {
  myProp: PropTypes.string.isRequired, // Add the missing prop type validation
};

export default PostItem;