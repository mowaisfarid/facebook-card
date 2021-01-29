import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function FacebookAss({ smallImg, name, timeDate, post, postImage }) {
  return (
    <div>
      <div className="smallimgDiv">
        <img className="smallImg" src={smallImg} />
        <h1 className="userName"> {name}</h1>
        {/* <p className="timeDate">{timeDate}</p> */}
      </div>

      <p className="post">{post}</p>
      <img className="postImage" src={postImage} />
    </div>
  );
}

ReactDOM.render(
  <div>
    <FacebookAss
      smallImg="https://lh3.googleusercontent.com/ogw/ADGmqu8L15yPCW-fIvRuMpN0fE9pKls2yY8xNelSM5XT9w=s83-c-mo"
      name="Muddassir"
      timeDate="Monday at 11:00 AM"
      post="Don't stress me, You can't impress me"
      postImage="https://www.setaswall.com/wp-content/uploads/2017/06/Dont-stress-me-you-cant-impress-me-851-x-315-768x284.jpg"
    />
  </div>,
  document.querySelector("#root")
);
