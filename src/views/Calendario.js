import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import itLocale from '@fullcalendar/core/locales/it';



const Calendario = () => {
    return (
        <div>

<FullCalendar
 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        locales={[itLocale]}
        locale="it"
        
        drop={(arg) => {
          console.log('start drag', arg.event.end)
          console.log('end drag', arg.event.end)
        }}

        eventResize={(arg) => {
          console.log('start resize', arg.event.end)
          console.log('end resize', arg.event.end)
        }}

        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridYear, dayGridMonth, timeGridWeek, timeGridDay'
        }}

        firstDay={1}
        editable={true}
        hiddenDays={[1,6]}
        slotMinTime="09:00"
        slotMaxTime="21:00"
        
        slotLabelFormat={{
            hour12: false,
            hour: 'numeric',
            minute: '2-digit'
         }}

        events={[
          {date: '2023-04-22', title:'Partita'},
          {title:'Pranzo', start:'2023-04-13T12:00:00', end:'2023-04-13T15:00:00'}
        ]}
      />

        </div>
    );
}



export default Calendario;