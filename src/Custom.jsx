import useFetch from "react-fetch-hook";

const Custom = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <div className='error'>Error: error fetching</div>;
  }
  return (
    <div>
      <h1 className='title'>Post of users</h1>
      {posts.map((post) => (
        <div key={post.id} className='card'>
          <h2 className='users'>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Custom;
