
import { useEffect, useState } from 'react';
import PostHeader from '../common/PostHeader';
// import { blogList } from '../../assets/BlogData';
import EmptyList from '../common/EmptyList';
import SearchBar from '../common/SearchBar';
import PostList from './PostList';

const Posts = () => {
    // const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch('https://attractive-shrimp.cyclic.app/api/v1/posts')
            .then(res => res.json())
            .then(data => setAllBlogs(data.filter(b => b?.status === 'approve')))
    }, [])

    useEffect(() => {
        setFilteredBlogs(allBlogs)
    }, [allBlogs])

    

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // const allBlogs = blg && blg?.filter(b => b?.status === 'approve');

    // console.log(allBlogs);

    // Search for blog by category
    const handleSearchResults = () => {
        // console.log(searchKey.length);
        if (searchKey.length > 0) {
            const result = allBlogs.filter((blog) =>
                blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
                blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
            );
            setFilteredBlogs(result);
        } else {
            setFilteredBlogs(allBlogs)
        }

    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setSearchKey('');
        // console.log("clear");
        setFilteredBlogs(allBlogs);
    };



    //   // Load Courses By Filter Type
    //   let blogs;

    //   if (searchKey?.length > 0) {
    //     blogs = filteredBlogs
    //   }
    //   else {
    //     blogs = allBlogs
    //   };

    const blogs = filteredBlogs;

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