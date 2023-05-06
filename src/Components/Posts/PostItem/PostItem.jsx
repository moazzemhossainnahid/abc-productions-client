
import { Link } from 'react-router-dom';
import Chip from '../../common/Chip';
import './styles.css';

const PostItem = ({
    blog: {
      description,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
    },
  }) => {
    return (
        <div className='blogItem-wrap'>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3 className='text-xl md:text-2xl font-bold text-start'>{title}</h3>
        <p className='blogItem-desc text-start pb-7'>{description?.slice(0,120)}</p>
        <footer className=''>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className='blogItem-link text-xl' to={`/post/${id}`}>
            ➝
          </Link>
        </footer>
      </div>
    );
};

export default PostItem;