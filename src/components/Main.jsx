import { useState } from "react";
import ProgramList from "./ProgramList";
import languages from "../data/languages";

function Main() {

    const [button, setButton] = useState(null);
    return (
        <>
            <div>
                {languages.map(element => <button onClick={() => { setButton(element.title) }} key={element.id}>{element.title}</button>)}
                <ProgramList ProgramDescription={languages.filter(element => element.title === button)} />
            </div>
        </>
    )
};

export default Main;
