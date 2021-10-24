import React, { Component } from "react";

class Comment extends Component {
  constructor() {
    super();

    this.state = {
      imgHolder: "",
      nameHolder: "",
      message: ""
    };
    // binding function
    this.postComment = this.postComment.bind(this);
  }

  // Post Comment Function
  postComment() {
    this.setState(() => {
      return {
        imgHolder: "https://source.unsplash.com/random/40x40",
        nameHolder: "Prince",
        message:
          "Hey, Im here to help you out please tell me from the help team "
      };
    });
  }

  render() {
    return (
      <div>
        <h2 className="font-bold text-2xl mb-2">Comments</h2>
        <div className="w-full p-4">
          <ul>
            <li className="flex justify-between items-center bg-white mt-2 p-2 shadow-lg rounded cursor-pointer">
              <div className="flex ml-2">
                <img
                  src={this.state.imgHolder}
                  className="rounded-full"
                  alt={this.state.nameHolder}
                />
                <div className="flex flex-col ml-2">
                  <span className="font-medium">{this.state.nameHolder}</span>
                  <span className="text-sm ">{this.state.message}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h3 className="font-bold text-xl mb-2">Post Comment</h3>
        <div class="flex h-screen">
          <div className="w-full bg-white p-2 rounded">
            <div className=" p-3 w-full">
              <textarea
                rows="3"
                className="border p-2 rounded w-full"
                placeholder="Write something..."
              />
            </div>
            <div className="flex justify-between mx-3">
              <div>
                <button
                  className="px-4 py-1 bg-blue-800 text-white rounded font-light hover:bg-blue-700"
                  onClick={this.postComment}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
