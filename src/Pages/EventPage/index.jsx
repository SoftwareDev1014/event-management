import Event from '../../Components/Event'
import './index.modules.scss'
import {events} from "../../utils/data"
export default function EventPage(){
    return <div className='event-page-container'>
        <div className='root'>
            <div className='content'>
                <div className='title'>Birthday Bash</div>
                <div className='description'>Hosted by <b>Elysia</b></div>

                {
                    events.map((e,index)=>(<Event key={'event'+index} {...e}/>))
                }
            </div>
            <div className='image-container'>
                <img src={require('assets/images/Eventimage.png')} alt="event image"/>
            </div>
        </div>
    </div>
}