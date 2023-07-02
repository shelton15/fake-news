import React from "react";
import '../App.css';
import {SideData} from './SideData';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className="SidebarList">{SideData.map((val, key)=> {
                return <li  
                        key={key} 
                        className="row"
                        id={window.location.pathmane === val.link ? "active" : ""}
                        onClick={()=> {
                            window.location.pathname = val.link}
                            }> 

                            <div id="icon"> {val.icon}</div>
                            <div id="title">{val.title}</div>

                        </li>;
            }
            )}
            </ul>
        </div>
    )
}

export default Sidebar