import React, { useReducer } from "react";

function Checkbox() {
    const [checked, toggle] = useReducer((checked) => !checked, false);

    return (
        <>
            <label htmlFor="checkbox">{checked ? "checked" : "not checked"}</label>
            <input type="checkbox" id="checkbox" value={checked} onChange={toggle} />
        </>
    );
}

export default Checkbox;