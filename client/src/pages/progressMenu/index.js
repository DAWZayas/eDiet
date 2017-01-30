import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Link} from 'react-router';

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <Link to="/user">
        {event.title}
        {event.desc && (':  ' + event.desc)}
      </Link>
    </span>
  );
}

export default class Calendar extends React.Component{
  render(){
    return (
      <div className="container" style={{marginTop: '5%'}}>
        <BigCalendar
            {...this.props}
            events={events}
            defaultDate={new Date()}
            style={{height: 500}}
            views={['month']}
            components={{
              event: Event,
            }}
        />
     </div>

   );
  }
}
