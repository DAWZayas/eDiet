import React, {Component} from 'react';
import {Link} from 'react-router';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {connect} from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const style = require('./style.scss');

BigCalendar.momentLocalizer(moment);

export default class Get extends Component {
  constructor(props) {
    super(props);

    this.eventStyleGetter = this.eventStyleGetter.bind(this);
  }

  componentWillMount() {
    const level = this.props.route;
    this.props.getExercises({level});
  }

  eventStyleGetter(event, start, end, isSelected) {
    var style = {
      backgroundColor: 'rgba(232, 142, 58, 0.6)',
      borderRadius: '0px',
      opacity: 0.9,
      color: 'black',
      border: '0px',
      display: 'block'
    };
    return {
        style: style
    };
  }

  render(){
    const {route, tables} = this.props;
    const Event = ({event}) => {
      return (
        <span>
          <Link to={`/plannings/1/exercises/${event.title}`}>
            {event.title}
            {event.desc && (':  ' + event.desc)}
          </Link>
        </span>
      );
    };

    const f = new Date();
    let events = [];
    for (let i=1, j=0; moment().daysInMonth(f.getMonth()+1)>=i; i++, j++){
        if(j === tables.length) j=0;
        if(tables.length-1 > 0){
          const obj = {
            'title': tables[j].name,
            'allDay': true,
            'start': new Date(f.getFullYear(), f.getMonth(), i),
            'end' : new Date(f.getFullYear(), f.getMonth(), i+1, 0,0,-i),
            'isSelected': true,
          };
          events.push(obj);
      }
    }
    this.state = {events}

    return (
      <div className={`container ${style.calendar}`}>
        <BigCalendar
          {...this.props}
          events={this.state.events}
          defaultDate={new Date()}
          style={{height: 500}}
          views={['month']}
          eventPropGetter={(this.eventStyleGetter)}
          components={{
            event: Event,
          }}
        />
     </div>
    );
  }
}
