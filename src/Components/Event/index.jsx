import {ImCalendar, ImLocation2} from 'react-icons/im'
import {AiOutlineRight} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

import './index.modules.scss'

const EventIcon = ({name})=>{
    let Icon = <ImCalendar/>
    switch(name){
        case 'calendar':
            Icon = <ImCalendar/>;
            break;
        case 'location':
            Icon = <ImLocation2/>
            break;
    }
    return Icon
}
export default function Event(props){
    const navigate  = useNavigate();

    const {icon, name, description} = props
    const handleGoEvent=(name)=>{
        navigate(`/event/${name}`);
    }
    return (
        <div className="eventContainer">
            <div className="event-icon"><EventIcon name={icon}/></div>
            <div className="event-content">
                <div className="event-title">{name}</div>
                <div className="event-description" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div className="action icon-btn" onClick={()=>{handleGoEvent(name)}}><AiOutlineRight/></div>
        </div>
    )
}