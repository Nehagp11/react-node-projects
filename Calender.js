import React from "react";

class Calender extends React.Component{
    constructor(props){
        super(props);
        this.state = {calenderDays : this.renderCalender(new Date()), currentMonth : new Date().getMonth()};
        this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

    renderCalender(today){
        let firstDay = new Date(today.getFullYear(), today.getMonth(),  1).getDay();
        let lastDate = new Date(today.getFullYear(), today.getMonth() + 1,  0).getDate();
        let lastDay = new Date(today.getFullYear(), today.getMonth() + 1,  0).getDay();
        let calenderDays = [];
        while (firstDay > 0) {
            let itemDate = new Date(today.getFullYear(), today.getMonth(), 1-firstDay);
            calenderDays.push(itemDate);
            firstDay--;
        }
        let currentDate = 1;
        while(lastDate >= currentDate){
            let itemDate = new Date(today.getFullYear(), today.getMonth(), currentDate);
            calenderDays.push(itemDate);
            currentDate++;
        }
        let Remaingingdays = 6 - lastDay;
        currentDate = 1;
        while(Remaingingdays > 0){
            let itemDate = new Date(today.getFullYear(), today.getMonth() + 1, currentDate);
            calenderDays.push(itemDate);
            currentDate++;
            Remaingingdays--;
        }
        return calenderDays;
    }

    render(){
        let calenderDays = this.state.calenderDays;
        return(
            <div className="calender">
                <ul>
                    {this.days.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
                <ul>
                    {calenderDays.map((item) => {
                        return <li key={item.toLocaleDateString()} className={item.getMonth() == this.state.currentMonth ? "active" : "" }>{item.getDate()}</li>
                    })}
                </ul>
            </div>
        )
        
    }
}

export default Calender;