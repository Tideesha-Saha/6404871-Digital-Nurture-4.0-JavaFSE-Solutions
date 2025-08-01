export default function BlogDetails({ show }) {
  let content;

  if (show) {
    content = (
      <>
        <div>
          <h1>React Learning</h1>
          <h2>Stephen Biz</h2>
          <p>Welcome to learning React!</p>
        </div>
        <div>
          <h2>Installation</h2>
          <h2>Schwezdenier</h2>
          <p>You can install React from npm.</p>
        </div>
      </>
    );
  } else {
    content = <p>No blog content to show.</p>;
  }

  return (
    <div className="column border-left">
      <h1>Blog Details</h1>
      {content}
    </div>
  );
}
