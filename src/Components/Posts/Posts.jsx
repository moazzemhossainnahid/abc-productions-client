
import { useEffect, useState } from 'react';
import PostHeader from '../common/PostHeader';
// import { blogList } from '../../assets/BlogData';
import EmptyList from '../common/EmptyList';
import SearchBar from '../common/SearchBar';
import PostList from './PostList';

const Posts = () => {
    // const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
    const [blg, setBlg] = useState([]);

    useEffect(() => {
        fetch('https://attractive-shrimp.cyclic.app/api/v1/posts')
            .then(res => res.json())
            .then(data => setBlg(data))
    }, [])
    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    const blogs = blg && blg?.filter(b => b?.status === 'approve');

    console.log(blogs);

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogs;
        if (searchKey.length > 0) {
            const filteredBlogs = allBlogs.filter((blog) =>
                blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
                blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
            );
            setBlg(filteredBlogs);
        } else {
            setBlg(allBlogs)
        }
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setSearchKey('');
        setBlg(blogs);
    };

    return (
        <div>
            {/* Page Header */}
            <PostHeader />

            {/* Search Bar */}
            <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
            />

            {/* Blog List & Empty View */}
            {!blogs?.length ? <EmptyList /> : <PostList blogs={blogs} />}
        </div>
    );
};

export default Posts;