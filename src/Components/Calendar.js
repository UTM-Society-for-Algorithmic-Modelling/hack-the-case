import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import "../App.css"


export default function Calandar({ title, subtitle, dark, id}) {
   return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <FullCalendar
      plugins={[ dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
      initialView="timeGridWeek"
        defaultView="week"
        initialDate='2021-02-14'
        slotMinTime="10:00:00"
        slotMaxTime="19:00:00"
        validRange = {{start: '2021-02-15', end: '2021-02-21'}}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}        
        listDayFormat = {true}
        events={[
          { title: 'Opening Ceremony', date: '2021-02-15T17:00:00', duration:'01:00'},
          { title: 'Case Competitions Through a Business Perspective', date: '2021-02-16T10:00:00', duration:'01:00'},
          { title: 'Build the Future with Open Source Tech', date: '2021-02-16T12:00:00', duration:'01:00' },
          { title: 'UX Design Principles', date: '2021-02-16T14:00:00', duration:'01:00'},
          { title: 'Rapid Prototyping and Deployment with React & Firebase', date: '2021-02-16T18:00:00', duration:'01:00'},
          { title: 'Pitch Like a Pro', date: '2021-02-17T11:00:00', duration:'01:00' },
          { title: 'Python 101 - Part I', date: '2021-02-17T18:00:00', duration:'01:00' },
          { title: 'Python 101 - Part II', date: '2021-02-18T12:00:00', duration:'01:00' },
          { title: 'Intro to Making with Robotics', date: '2021-02-18T17:00:00', duration:'01:00' }
        ]}
        eventColor="#1a237e"
        />
      </div>
    </div>
  );
}
