
import { useState } from 'react';
import PostHeader from '../common/PostHeader';
import { blogList } from '../../assets/BlogData';
import EmptyList from '../common/EmptyList';
import SearchBar from '../common/SearchBar';
import PostList from './PostList';

const Posts = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
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
            {!blogs.length ? <EmptyList /> : <PostList blogs={blogs} />}
        </div>
    );
};

export default Posts;