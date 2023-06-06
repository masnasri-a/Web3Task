"use client";
import { FiX } from "react-icons/fi";

const ModalPick = (props:any) => {
  return (
    <div>
        <div className="modal">
          <div className="mainModal">
            <div className="headModal">
              <span>Title</span>
              <div className="close" onClick={()=>props.open(false)}>
                <FiX />
              </div>
            </div>
            <div className="mainContentModal">
                <span>Description</span>
                <p>
                The CSS object-fit property is used to specify how an should be resized to fit its container.
This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".
This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".
This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible".

Look at the following image from Paris. This image is 400 pixels wide and 300 pixels high:
                </p>
            </div>
            <div className="additionalContentModal">
                <p>Deadline : <span>13 May 2023</span></p>
            </div>
                <button type="submit" className="pickButton">Pick Up Task</button>
          </div>
        </div>
    </div>
  );
};

export default ModalPick;
