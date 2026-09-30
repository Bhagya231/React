import { useState } from "react";

export default function Player({name,symbol,isActive})
{
    const [playerName,setPlayerName] = useState(name)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick()
    {
        // setIsEditing(true);
        // setIsEditing(isEditing ? false : true);
        //  setIsEditing(!isEditing); // => schedules a state update to true 

         setIsEditing((editing) => !editing); 
    }

    function handleChange(event)
    {
        console.log(event);
        setPlayerName(event.target.value);

    }
    let editableplayerName =  <span className='player-name'>{playerName}</span>;
    //  let btn Caption = edit 

    if(isEditing)
    {
        editableplayerName = (<input type="text" required value={playerName} onChange={handleChange} className="form-control player-input"/>);
         //  let btn Caption = save
    }

    return (
    <li className={`player-card col-md-6 ${isActive ? "active" : ""}`}>

        <div className="player">

        <div className="player-info">
            {editableplayerName}

            <span className={`player-symbol symbol-${symbol.toLowerCase()}`}>
            {symbol}
            </span>
        </div>

        <button
            type="button"
            className="btn edit-btn"
            onClick={handleEditClick}
        >
            {isEditing ? "Save" : "Edit"}
        </button>

        </div>

    </li>
    );


}