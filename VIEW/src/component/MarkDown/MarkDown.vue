<template>
  <div class="markdown" ref="md" v-md>
    <slot name="default"></slot>
  </div>
</template>

<script>
var marked = require('marked');
export default {
  name: 'markdown',

  data () {
    return {
      msg: 'markdown'
    }
  },
  computed:{
    /*markedHtml(){
      //v-html="markedHtml"
      if(this.$refs.md){
        return marked(this.$refs.md.innerHtml);
      }
      return marked('I am using __markdown__.');
    }*/
  },
  created(){   
  }
}
</script>

<style>
    /*
  * https://gist.github.com/andyferra/2554919
  */
  .markdown {
    /*font-family: 微软雅黑 Helvetica, arial, sans-serif;*/
    font-size: 14px;
    line-height: 1.6;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: white;
    padding: 30px; }

  .markdown > *:first-child {
    margin-top: 0 !important; }
  .markdown > *:last-child {
    margin-bottom: 0 !important; }

  a {
    color: #4183C4; }
  a.absent {
    color: #cc0000; }
  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0; }

  h1, h2, h3, h4, h5, h6 {
    margin: 20px 0 10px;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative; }

  h1:hover a.anchor, h2:hover a.anchor, h3:hover a.anchor, h4:hover a.anchor, h5:hover a.anchor, h6:hover a.anchor {
    /*background: url("../../images/modules/styleguide/para.png") no-repeat 10px center;*/
    text-decoration: none; }

  h1 tt, h1 code {
    font-size: inherit; }

  h2 tt, h2 code {
    font-size: inherit; }

  h3 tt, h3 code {
    font-size: inherit; }

  h4 tt, h4 code {
    font-size: inherit; }

  h5 tt, h5 code {
    font-size: inherit; }

  h6 tt, h6 code {
    font-size: inherit; }

  h1 {
    font-size: 28px;
    color: black; }

  h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black; }

  h3 {
    font-size: 18px; }

  h4 {
    font-size: 16px; }

  h5 {
    font-size: 14px; }

  h6 {
    color: #777777;
    font-size: 14px; }

  p, blockquote, ul, ol, dl, li, table, pre {
    margin: 15px 0; }

  .markdown > h2:first-child {
    margin-top: 0;
    padding-top: 0; }
  .markdown > h1:first-child {
    margin-top: 0;
    padding-top: 0; }
    .markdown > h1:first-child + h2 {
      margin-top: 0;
      padding-top: 0; }
  .markdown > h3:first-child, .markdown > h4:first-child, .markdown > h5:first-child, .markdown > h6:first-child {
    margin-top: 0;
    padding-top: 0; }

  a:first-child h1, a:first-child h2, a:first-child h3, a:first-child h4, a:first-child h5, a:first-child h6 {
    margin-top: 0;
    padding-top: 0; }

  h1 p, h2 p, h3 p, h4 p, h5 p, h6 p {
    margin-top: 0; }

  li p.first {
    display: inline-block; }

  ul, ol {
    padding-left: 30px; }

  ul :first-child, ol :first-child {
    margin-top: 0; }

  ul :last-child, ol :last-child {
    margin-bottom: 0; }

  dl {
    padding: 0; }
    dl dt {
      font-size: 14px;
      font-weight: bold;
      font-style: italic;
      padding: 0;
      margin: 15px 0 5px; }
      dl dt:first-child {
        padding: 0; }
      dl dt > :first-child {
        margin-top: 0; }
      dl dt > :last-child {
        margin-bottom: 0; }
    dl dd {
      margin: 0 0 15px;
      padding: 0 15px; }
      dl dd > :first-child {
        margin-top: 0; }
      dl dd > :last-child {
        margin-bottom: 0; }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777; }
    blockquote > :first-child {
      margin-top: 0; }
    blockquote > :last-child {
      margin-bottom: 0; }

  table {
    border-collapse: collapse;
    padding: 0; }
    table tr {
      border-top: 1px solid #cccccc;
      background-color: white;
      margin: 0;
      padding: 0; }
      table tr:nth-child(2n) {
        background-color: #f8f8f8; }
      table tr th {
        font-weight: bold;
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px; }
      table tr td {
        border: 1px solid #cccccc;
        text-align: left;
        margin: 0;
        padding: 6px 13px; }
      table tr th :first-child, table tr td :first-child {
        margin-top: 0; }
      table tr th :last-child, table tr td :last-child {
        margin-bottom: 0; }

  img {
    max-width: 100%; }

  span.frame {
    display: block;
    overflow: hidden; }
    span.frame > span {
      border: 1px solid #dddddd;
      display: block;
      float: left;
      overflow: hidden;
      margin: 13px 0 0;
      padding: 7px;
      width: auto; }
    span.frame span img {
      display: block;
      float: left; }
    span.frame span span {
      clear: both;
      color: #333333;
      display: block;
      padding: 5px 0 0; }
  span.align-center {
    display: block;
    overflow: hidden;
    clear: both; }
    span.align-center > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: center; }
    span.align-center span img {
      margin: 0 auto;
      text-align: center; }
  span.align-right {
    display: block;
    overflow: hidden;
    clear: both; }
    span.align-right > span {
      display: block;
      overflow: hidden;
      margin: 13px 0 0;
      text-align: right; }
    span.align-right span img {
      margin: 0;
      text-align: right; }
  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left; }
    span.float-left span {
      margin: 13px 0 0; }
  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right; }
    span.float-right > span {
      display: block;
      overflow: hidden;
      margin: 13px auto 0;
      text-align: right; }

  code, tt {
    margin: 0 2px;
    padding: 0 5px;
    white-space: nowrap;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    border-radius: 3px; }

  code:not(.v-code) {
    background-color: rgba(255, 128, 171, 0.2);
    color: #ad1457;
  }
  pre code {
    margin: 0;
    padding: 0;
    white-space: pre;
    border: none;
    background: transparent; }

  .highlight pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px; }

  pre {
    background-color: #f8f8f8;
    border: 1px solid #cccccc;
    font-size: 13px;
    line-height: 19px;
    overflow: auto;
    padding: 6px 10px;
    border-radius: 3px; }
    pre code, pre tt {
      background-color: transparent;
      border: none; }

  /*
  * from highlight.js
  */

  /*

  github.com style (c) Vasily Polovnyov <vast@whiteants.net>

  */

  /*.hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment,
  .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-subst {
    color: #333;
    font-weight: bold;
  }

  .hljs-number,
  .hljs-literal,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag .hljs-attr {
    color: #008080;
  }

  .hljs-string,
  .hljs-doctag {
    color: #d14;
  }

  .hljs-title,
  .hljs-section,
  .hljs-selector-id {
    color: #900;
    font-weight: bold;
  }

  .hljs-subst {
    font-weight: normal;
  }

  .hljs-type,
  .hljs-class .hljs-title {
    color: #458;
    font-weight: bold;
  }

  .hljs-tag,
  .hljs-name,
  .hljs-attribute {
    color: #000080;
    font-weight: normal;
  }

  .hljs-regexp,
  .hljs-link {
    color: #009926;
  }

  .hljs-symbol,
  .hljs-bullet {
    color: #990073;
  }

  .hljs-built_in,
  .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta {
    color: #999;
    font-weight: bold;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition {
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }*/

  /*
  * For task-list-item
  */

  .task-list-item {
    list-style-type: none;
  }

  /* Flowchart variables */
  /* Sequence Diagram variables */
  /* Gantt chart variables */
  .mermaid .label {
    color: #333;
  }

  /*.node rect,
  .node circle,
  .node ellipse,
  .node polygon {
    fill: #ECECFF;
    stroke: #CCCCFF;
    stroke-width: 1px;
  }*/
  .edgePath .path {
    stroke: #333333;
  }
  .edgeLabel {
    background-color: #e8e8e8;
  }
  .cluster rect {
    fill: #ffffde !important;
    rx: 4 !important;
    stroke: #aaaa33 !important;
    stroke-width: 1px !important;
  }
  .cluster text {
    fill: #333;
  }
  .actor {
    stroke: #CCCCFF;
    fill: #ECECFF;
  }
  text.actor {
    fill: black;
    stroke: none;
  }
  .actor-line {
    stroke: grey;
  }
  .messageLine0 {
    stroke-width: 1.5;
    stroke-dasharray: "2 2";
    marker-end: "url(#arrowhead)";
    stroke: #333;
  }
  .messageLine1 {
    stroke-width: 1.5;
    stroke-dasharray: "2 2";
    stroke: #333;
  }
  #arrowhead {
    fill: #333;
  }
  #crosshead path {
    fill: #333 !important;
    stroke: #333 !important;
  }
  .messageText {
    fill: #333;
    stroke: none;
  }
  .labelBox {
    stroke: #CCCCFF;
    fill: #ECECFF;
  }
  .labelText {
    fill: black;
    stroke: none;
  }
  .loopText {
    fill: black;
    stroke: none;
  }
  .loopLine {
    stroke-width: 2;
    stroke-dasharray: "2 2";
    marker-end: "url(#arrowhead)";
    stroke: #CCCCFF;
  }
  .note {
    stroke: #aaaa33;
    fill: #fff5ad;
  }
  .noteText {
    fill: black;
    stroke: none;
    font-family: 'trebuchet ms', verdana, arial;
    font-size: 14px;
  }
  /** Section styling */
  .section {
    stroke: none;
    opacity: 0.2;
  }
  .section0 {
    fill: rgba(102, 102, 255, 0.49);
  }
  .section2 {
    fill: #fff400;
  }
  .section1,
  .section3 {
    fill: white;
    opacity: 0.2;
  }
  .sectionTitle0 {
    fill: #333;
  }
  .sectionTitle1 {
    fill: #333;
  }
  .sectionTitle2 {
    fill: #333;
  }
  .sectionTitle3 {
    fill: #333;
  }
  .sectionTitle {
    text-anchor: start;
    font-size: 11px;
    text-height: 14px;
  }
  /* Grid and axis */
  .grid .tick {
    stroke: lightgrey;
    opacity: 0.3;
    shape-rendering: crispEdges;
  }
  .grid path {
    stroke-width: 0;
  }
  /* Today line */
  .today {
    fill: none;
    stroke: red;
    stroke-width: 2px;
  }
  /* Task styling */
  /* Default task */
  .task {
    stroke-width: 2;
  }
  .taskText {
    text-anchor: middle;
    font-size: 11px;
  }
  .taskTextOutsideRight {
    fill: black;
    text-anchor: start;
    font-size: 11px;
  }
  .taskTextOutsideLeft {
    fill: black;
    text-anchor: end;
    font-size: 11px;
  }
  /* Specific task settings for the sections*/
  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: white;
  }
  .task0,
  .task1,
  .task2,
  .task3 {
    fill: #8a90dd;
    stroke: #534fbc;
  }
  .taskTextOutside0,
  .taskTextOutside2 {
    fill: black;
  }
  .taskTextOutside1,
  .taskTextOutside3 {
    fill: black;
  }
  /* Active task */
  .active0,
  .active1,
  .active2,
  .active3 {
    fill: #bfc7ff;
    stroke: #534fbc;
  }
  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: black !important;
  }
  /* Completed task */
  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: grey;
    fill: lightgrey;
    stroke-width: 2;
  }
  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: black !important;
  }
  /* Tasks on the critical line */
  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: #ff8888;
    fill: red;
    stroke-width: 2;
  }
  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: #ff8888;
    fill: #bfc7ff;
    stroke-width: 2;
  }
  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: #ff8888;
    fill: lightgrey;
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: black !important;
  }
  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: black !important;
  }
  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: black;
  }
  /*


  */
  .mermaid .node text {
    font-family: 'trebuchet ms', verdana, arial;
    font-size: 14px;
  }
  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: 'trebuchet ms', verdana, arial;
    font-size: 12px;
    background: #ffffde;
    border: 1px solid #aaaa33;
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }


  /*hljs*/
  /*.hljs{
    display:block;padding:.5em;background:#23241f
  }
  .hljs,.hljs-tag,.css .hljs-rules,.css .hljs-value,.css .hljs-function .hljs-preprocessor,.hljs-pragma{
    color:#f8f8f2}
  .hljs-strongemphasis,.hljs-strong,.hljs-emphasis{color:#a8a8a2}
  .hljs-bullet,.hljs-blockquote,.hljs-horizontal_rule,.hljs-number,.hljs-regexp,.alias .hljs-keyword,.hljs-literal,.hljs-hexcolor{color:#ae81ff}
  .hljs-tag .hljs-value,.hljs-code,.hljs-title,.css .hljs-class,.hljs-class .hljs-title:last-child{color:#a6e22e}
  .hljs-link_url{font-size:80%}
  .hljs-strong,.hljs-strongemphasis{font-weight:bold}.hljs-emphasis,
  .hljs-strongemphasis,.hljs-class .hljs-title:last-child{font-style:italic}
  .hljs-keyword,.hljs-function,.hljs-change,.hljs-winutils,.hljs-flow,.lisp .hljs-title,.clojure .hljs-built_in,.nginx .hljs-title,.tex .hljs-special,.hljs-header,.hljs-attribute,.hljs-symbol,.hljs-symbol .hljs-string,.hljs-tag .hljs-title,.hljs-value,.alias .hljs-keyword:first-child,.css .hljs-tag,.css .unit,.css .hljs-important{color:#f92672}
  .hljs-function .hljs-keyword,.hljs-class .hljs-keyword:first-child,.hljs-constant,.css .hljs-attribute{color:#66d9ef}
  .hljs-variable,.hljs-params,.hljs-class .hljs-title{color:#f8f8f2}
  .hljs-string,.css .hljs-id,.hljs-subst,.haskell .hljs-type,.ruby .hljs-class .hljs-parent,.hljs-built_in,.sql .hljs-aggregate,.django .hljs-template_tag,.django .hljs-variable,.smalltalk .hljs-class,.django .hljs-filter .hljs-argument,.smalltalk .hljs-localvars,.smalltalk .hljs-array,.hljs-attr_selector,.hljs-pseudo,.hljs-addition,.hljs-stream,.hljs-envvar,.apache .hljs-tag,.apache .hljs-cbracket,.tex .hljs-command,.hljs-prompt,.hljs-link_label,.hljs-link_url{color:#e6db74}
  .hljs-comment,.hljs-javadoc,.java .hljs-annotation,.python .hljs-decorator,.hljs-template_comment,.hljs-pi,.hljs-doctype,.hljs-deletion,.hljs-shebang,.apache .hljs-sqbracket,.tex .hljs-formula{color:#75715e}
  .coffeescript .javascript,.javascript .xml,.tex .hljs-formula,.xml .javascript,.xml .vbscript,.xml .css,.xml .hljs-cdata,.xml .php,.php .xml{opacity:.5}
*/

/*tip */
div.tip{
  padding: 2px 24px 2px 30px;
  margin: 2em 0;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: #f66;
  background-color: #f8f8f8;
  position: relative;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
}
.tip:before{
  content: "!";
  background-color: #f66;
}
.tip:before{
  position: absolute;
  top: 14px;
  left: -12px;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  text-align: center;
  line-height: 20px;
  font-weight: bold;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
}



</style>
