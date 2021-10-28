import React, { useState, useRef } from "react";

const Comment = () => {
  const commentsData = [
    { id: 1, name: "Prince", details: "ello tere", posted_time: 2020 }
  ];

  const [comments, setComments] = useState(commentsData);

  /* Form variables */
  const commentName = useRef();
  const commentDetails = useRef();
  const commentTime = useRef();
  const commentForm = useRef();

  const postComment = (event) => {
    event.preventDefault();

    const name = commentName.current.value;
    const details = commentDetails.current.value;
    const posted_time = commentTime.current.value;

    const newComment = {
      id: comments.length + 1,
      name: name,
      details: details,
      posted_time: posted_time
    };

    setComments([...comments, newComment]);
    commentForm.current.reset();
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-2">Comments</h2>
      <div className="w-full p-4">
        <ul>
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="flex justify-between items-center bg-white mt-2 p-2 shadow-lg rounded cursor-pointer"
            >
              <div className="flex ml-2">
                <div className="flex flex-col ml-2">
                  <span className="font-medium">{comment.name}</span>
                  <span className="text-sm ">{comment.details}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h3 className="font-bold text-xl mb-2">Post Comment</h3>
      <form onSubmit={postComment} ref={commentForm}>
        <div className="flex">
          <div className="w-full bg-white p-2 rounded">
            <div className=" p-3 w-full">
              <input
                type="text"
                required
                id="name"
                ref={commentName}
                className="border p-2 rounded w-full"
                placeholder="Your Name"
              />
            </div>
            <div className=" p-3 w-full">
              <input
                type="time"
                required
                id="posted_time"
                ref={commentTime}
                className="border p-2 rounded w-full"
                placeholder="Your Name"
              />
            </div>
            <div className=" p-3 w-full">
              <textarea
                rows="3"
                id="name"
                ref={commentDetails}
                className="border p-2 rounded w-full"
                placeholder="Write something..."
              />
            </div>

            <div className="flex justify-between mx-3">
              <div>
                <button className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
