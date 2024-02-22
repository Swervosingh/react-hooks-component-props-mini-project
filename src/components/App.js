import React from "react";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import blogData from "../data/blog";

console.log(blogData);


function App() {
  const posts = [
    { title: 'First Post', content: 'Content of the first post...' },
    { title: 'Second Post', content: 'Content of the second post...' },
    // Add more posts as needed
  ];
  return (
    <div className="App">
    <Header name={blogData.name} />
    <About image={blogData.image} about={blogData.about}/>
    <ArticleList posts={blogData.posts} />
    {/* Other components or content */}
  </div>
  );
}

export default App;
