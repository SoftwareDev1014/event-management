import {
    useParams
  } from "react-router-dom";
import { events } from "../../utils/data";
import "./index.modules.scss"
export default function EventDetailPage(){
    let { name } = useParams();
    let event = events.filter(e=>e.name===name)
    if(event.length===0) {
        return (
            <div>Could not find event: "{name}"</div>
        )
    }
    event=event[0]
    return (
        <div className="eventDetailPage">
            {
                Object.keys(event).map((key)=>(
                    <div key={key} className={"eventDetailPageRoot"}>
                        <div className="eventKey">{key}</div>
                        <div className="eventValue">{event[key]}</div>
                    </div>
                ))
            }
        </div>
    )
}