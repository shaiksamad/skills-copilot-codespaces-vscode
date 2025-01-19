// Create web server
// Create a web server that takes a request with a URL like /comments?postId=1 and returns a JSON response with all the comments for a particular post. The post ID should be passed as a query parameter. If the post ID is not passed, the server should return all the comments.

const http = require('http');
const url = require('url');

const comments = [
    { postId: 1, id: 1, name: 'John', body: 'Hello' },
    { postId: 1, id: 2, name: 'Jane', body: 'Hi' },
    { postId: 2, id: 3, name: 'John', body: 'Hey' },
];

const server = http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    const postId = query.postId;
    let result = comments;
    if (postId) {
        result = comments.filter(comment => comment.postId == postId);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Run the server and make a request to http://localhost:3000/comments?postId=1 to get comments for post ID 1. To get all comments, make a request to http://localhost:3000/comments.
// You should see a JSON response with the comments for the specified post ID or all comments.