import { useState } from "react";
import ProgramList from "./ProgramList";
import languages from "../data/languages";
import "../index.css"

function Main() {

    const [button, setButton] = useState(null);
    return (
        <>
            <div className="container-h1">
                <h1>Learn Web Development</h1>
            </div>
            <div className="container">
                {languages.map(element => <button className="butt" onClick={() => { setButton(element.title) }} key={element.id}>{element.title}</button>)}
                <ProgramList ProgramDescription={languages.filter(element => element.title === button)} />
            </div>
        </>
    )
};

export default Main;
