import {GoCheck} from 'react-icons/go';
import {GoX} from 'react-icons/go';
import '../styles/TodoIcon.css'
const IconTypes ={
    "check": (color)=><GoCheck className="Icon-svg" fill={color}/>,
    "delete":(color)=><GoX className="Icon-svg" fill={color}/>,
};

function TodoIcon({type,color,onClick}){
    return(
        <span className={`Icon-container  Icon-container-${type}`} onClick={onClick}>
        {IconTypes[type](color)}
        </span>
    );
}

export{TodoIcon};