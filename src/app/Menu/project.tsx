import CardProject from "@/components/cardProject";
import React from "react";

const Project = () => {
  return (
    <div className="projectMenu">
      <div className="todo project">
        <div className="head">
          <p>To Do</p>
          <div className="total">3</div>
        </div>
        <div className="mainTask">
          <CardProject menu={"todo"} timestamp={1685702241000}/>
          <CardProject menu={"todo"} timestamp={1686393441000}/>
          <CardProject menu={"todo"} timestamp={1686393441000}/>
        </div>
      </div>
      <div className="process project">
        <div className="head">
          <p>In Progres</p>
          <div className="total">3</div>
        </div>
        <div className="mainTask">
          <CardProject menu={"process"} timestamp={1686393441000}/>
          <CardProject menu={"process"} timestamp={1686393441000}/>
          <CardProject menu={"process"} timestamp={1686393441000}/>
        </div>
      </div>
      <div className="todo project">
        <div className="head">
          <p>Complete</p>
          <div className="total">3</div>
        </div>
        <div className="mainTask">
          <CardProject menu={"complete"} timestamp={1686393441000}/>
          <CardProject menu={"complete"} timestamp={1686393441000}/>
          <CardProject menu={"complete"} timestamp={1686393441000}/>
        </div>
      </div>
      <div className="todo project">
        <div className="head">
          <p>Overdue</p>
          <div className="total">3</div>
        </div>
        <div className="mainTask">
          <CardProject menu={"overdue"} timestamp={1681223451000}/>
          <CardProject menu={"overdue"} timestamp={1686393441000}/>
          <CardProject menu={"overdue"} timestamp={1686393441000}/>
        </div>
      </div>
    </div>
  );
};

export default Project;
