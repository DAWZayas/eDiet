import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import {connect} from 'react-redux';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Link} from 'react-router';

import {getMenuLevelAction} from '../../store/actions';

const mapStateToProps = (state) => ({
    menuLevel: state.menus.menuLevel,
    route: state.routing.locationBeforeTransitions.pathname
 });

const mapDispatchToProps = (dispatch) => ({
  getMenuLevel: payload => dispatch(getMenuLevelAction(payload)),
});

BigCalendar.momentLocalizer(moment);

function Event({ event }) {
  return (
    <span>
      <Link to={`/planning/menu/level/${event.title}`}>
        {event.title}
        {event.desc && (':  ' + event.desc)}
      </Link>
    </span>
  );
}

class Calendar extends React.Component{

  constructor(props){
    super(props);
    const rout = this.props.route.split('/');
    const level = rout[rout.length-1];
    this.state = {level};
  }

  componentWillMount(){
    this.props.getMenuLevel({level: this.state.level});
  }
  render(){

    const f = new Date();
    let events = [];
    for (let i=1, j=0; moment().daysInMonth(f.getMonth()+1)>=i; i++, j++){
        if(j === this.props.menuLevel.length-1) j=0;
        if(this.props.menuLevel.length-1 > 0){
          const obj = {
            'title': this.props.menuLevel[j].name,
            'allDay': true,
            'start': new Date(f.getFullYear(), f.getMonth(), i),
            'end' : new Date(f.getFullYear(), f.getMonth(), i+1, 0,0,-i),
          };
          events.push(obj);
       }
    }
    this.state = {events}

    return (
      <div className="container" style={{marginTop: '5%'}}>
      {this.props.menuLevel.length-1 > 0 ?
        <BigCalendar
            {...this.props}
            events={this.state.events}
            defaultDate={new Date()}
            style={{height: 500}}
            views={['month']}
            components={{
              event: Event,
            }}
        />
      : null}
     </div>

   );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Calendar)
