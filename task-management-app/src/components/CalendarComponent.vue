<template>
    <div id="app" v-if="canRenderTemplate">
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
      canRenderTemplate: false,
      tasksAsCalendarView: [],
    }
  },
  beforeCreate() {
    axios.get("http://localhost:3000/calendar")
        .then(response => {
          console.log("Logging response from get /calendar");
          this.tasksAsCalendarView = response.data;
          this.canRenderTemplate = true;
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
