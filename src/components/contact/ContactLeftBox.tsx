import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ContactLeftBox: React.FC = () => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className="ContactLeftBox">
      <h1>¡Agenda tu cita conmigo!</h1>

      <div className="calendarContainer">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default ContactLeftBox;
