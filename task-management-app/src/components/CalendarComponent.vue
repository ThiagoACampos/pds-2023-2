<template>
    <div id="app">
    <Schedule :time-ground="['09:00', '18:00']" 
    :week-ground="['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']" 
    :task-detail = "tasksAsCalendarView">
    </Schedule>
  </div>
</template>

<script>
import axios from "axios";

export default {

  data() {
    return {
      tasksAsCalendarView: [],
      staticTasks2: [
        [],
        [],
        [
          {
            "dateStart": "9:00",
            "dateEnd": "12:00",
            "title": "Teste 06",
            "detail": "Teste 06"
          },
          {
            "dateStart": "12:00",
            "dateEnd": "15:00",
            "title": "Teste 03",
            "detail": "Teste 03"
          }
        ],
        [
          {
            "dateStart": "9:00",
            "dateEnd": "15:00",
            "title": "Teste 04",
            "detail": "Teste 04"
          }
        ],
        [],
        [],
        []
      ],
      staticTasks: [
        [
          {
            dateStart: '09:30',
            dateEnd: '10:30',
            title: 'Metting',
            detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: 'Metting',
            detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
          }

        ],
        [
          {
            dateStart: '10:30',
            dateEnd: '12:00',
            title: 'Metting',
          },
          {
            dateStart: '12:30',
            dateEnd: '14:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '12:30',
            dateEnd: '13:30',
            title: 'Metting',
          },
          {
            dateStart: '15:30',
            dateEnd: '16:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '09:50',
            dateEnd: '10:50',
            title: 'Metting',
          },
          {
            dateStart: '11:30',
            dateEnd: '13:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '12:30',
            dateEnd: '13:30',
            title: 'Metting',
          },
          {
            dateStart: '14:30',
            dateEnd: '15:50',
            title: 'Metting',
          }

        ],
        [
          {
            dateStart: '12:30',
            dateEnd: '13:30',
            title: 'Metting',
          },
          {
            dateStart: '14:30',
            dateEnd: '15:50',
            title: 'Test',
            detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
          }

        ]
      ]
    }
  },
  created() {
    axios.get("http://localhost:3000/calendar")
        .then(response => {
          console.log("Logging response from get /calendar");
          this.tasksAsCalendarView = response.data;
          console.log("this.tasksAsCalendarView");
          console.log(this.tasksAsCalendarView);
          console.log(this.staticTasks2);
          console.log(this.tasksAsCalendarView === this.staticTasks2);
        })
        .catch((error) => {
          console.log("Error trying to request to /calendar")
          console.log(error);
        })

  }
}
</script>

<style type="text/css">
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    

</style>
