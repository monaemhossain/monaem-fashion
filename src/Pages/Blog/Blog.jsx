
const Blog = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => console.log(data))

      

    return (
        <div>
            {/* console.log(data); */}
        </div>
    );
};

export default Blog;