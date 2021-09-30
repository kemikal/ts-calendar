import React, { Component } from 'react';
import moment from 'moment';

interface Props {
    events: Object,
    showMonth: string
}

interface State {
    events: Object,
}

class Month extends Component <Props, State> {

    state = {
      events: this.props.events,
    }

    render() {

        console.log("Events", this.props.events);

        let startDay = moment(this.props.showMonth).startOf("month").format("YYYY-MM-DD");
        let endDay = moment(this.props.showMonth).endOf("month").format("YYYY-MM-DD");

        // CHECK FIRST AND LAST DAY
        let startDudds = moment(startDay).isoWeekday();
        let endDudds = moment(endDay).isoWeekday();

        // console.log("dudds", startDudds);

        let showDays = [];

        //showDays = [1,2,2,5,6,78];

           
        // ADD BLANK DAYS IN BEGINNING
        while (startDudds > 1) {
            showDays.push("Blank")
            startDudds --
        }

        // Add all days
        for (let month = moment(startDay); month.isSameOrBefore(endDay); month.add(1, "days") ) {
            showDays.push(month.format("YYYY-MM-DD"))
        }

        // ADD BLANKS IN END
        while (endDudds < 7) {
            showDays.push("Blank")
            endDudds ++
        }

        // console.log("showDays", showDays);

       const showEvents = (day: string, events: Object) => {
           const eventDays = Object.values(events).filter(events => events.deadline === day);
          // console.log("från show Events", eventDays);

           const returnEvents = eventDays.map((event, i) => {
                return <div style={styles.event} key={i}>{event.todo}</div>;
           })

           return returnEvents;
       }

        const styles = {
            eventList: {
                maxWidth: "200px",
                backgroundColor: "lightgreen",
            },
            month: {
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                width: "700px",
            },
            day: {
                width: "100px",
                height: "100px",
                border: "1px solid black",
                backgroundColor: "lightgray",
            },
            event: {
                backgroundColor: "gold",
            }
        }

        return (
            <div>
                
                <h2>Månad</h2>
                <div style={styles.eventList}>
                    <ul>
                        {Object.values(this.state.events).map((event, i) => {
                            return <li key={i}>{event.todo}</li>
                        })}
                    </ul>
                </div>

                <div style={styles.month}>
                    {showDays.map((day, i) => {
                        return <div style={styles.day} key={i}>
                            {day}
                            {showEvents(day, this.state.events)}
                            </div>
                    })}
                </div>

            </div>
        );
    }
}

export default Month;