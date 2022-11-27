import React, { Component, useState } from "react";
import Support from "./components/Support";
import ListCast from "./components/ListCast";
import Modals from './components/Modals';

function App() {
  const name = "StarGazers";
  let [memberInfo, setMemberInfo] = useState(null);
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the Stargzers!</h1>
          <p>
            Members of an <b>intergalactic alliance</b>
            paving the way for peace and benevolence among all species. They are
            known for their enthusiasm for science, for their love of fun, and
            their dedication to education.
          </p>
          <ListCast
            onChoice={(info) => {
              setMemberInfo(info)}}/>
          {memberInfo && <Modals member={memberInfo} handleClose={()=>{setMemberInfo(null)}}/> 
          }
          <Support />
        </hgroup>
      </article>
    </div>
  );
}
export default App;
