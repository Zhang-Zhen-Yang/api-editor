//import Vue from 'vue'
const marked = require('marked');
const hljs = require('highlight.js');
//const viz = require("viz.js");

const codeConverters = {
  graph:function(code){
    let translateCode = code.replace(/&lt;/mig,'<');
    return window.Viz(translateCode,'svg')
  }
}

//const {rendererCode, rendererListitem, rendererHtml, rendererHeading} = require('../js/utils.js');
let render = new marked.Renderer();

render.listitem = (text) => {
  // console.log('text -------------------------------------',text);
  const TASK_START = '<li class="task-list-item">';
  const COMPLETE = '<input type="checkbox" checked="true" disabled="true">';
  const UNCOMPLETE = '<input type="checkbox" disabled="true">';
  let task = '';

  if (text.startsWith("[x]")) {
    task = text.slice("[x]".length).trim();

    return  `${TASK_START}${COMPLETE}${task}</li>`;
  } else if (text.startsWith("[ ]")) {
    task = text.slice("[ ]".length).trim();

    return  `${TASK_START}${UNCOMPLETE}${task}</li>`;
  }
  return `<li>${text}</li>`;
}

render.html = (html) => {
  // console.log('html -------------------------------------',html);
  if (/(<[^>]*script[^>]*>|<[^>]* on[^=>]*=)/.test(html)) {
    let hljsCode = hljs.highlightAuto(html).value.trim();
    return `<pre><code>${hljsCode}</code></pre>`;
  }
  return html;
}

render.heading = (text, level) => {
  let id = encodeURI(text).replace(/%/g, "");
  return  `<h${level} id="${id}">${text}</h${level}>\n`;
}

render.code = (code,language)=>{
  // console.log('language--------------------------------------------',language);
  const ERR_HEAD =
    "\n******************* Convert Error *******************\n";
  const ERR_TAIL =
    "\n*****************************************************\n";
  // console.log('code',code);
  let translateCode = code.replace(/&amp;lt;/mig,'<').replace(/&amp;gt;/mig,'>');
  let hljsCode = hljs.highlightAuto(translateCode).value;

  if (codeConverters[language]) {
    try {
      let hljsCode = hljs.highlightAuto(translateCode).value;
      return  codeConverters[language](translateCode);
    } catch (error) {
      let errMsg = String(error).trim();
      let retCode =
        `<pre><code>${hljsCode}${ERR_HEAD}${errMsg}${ERR_TAIL}</code></pre>`;
      return retCode;
    }
  }
  return `<pre><code>${hljsCode}</code></pre>`;
}

marked.setOptions({
  renderer: render,
  gfm: true,//允许 Git Hub标准的markdown.
  breaks: false,//允许回车换行。该选项要求 gfm 为true。
  /*tables: true,//允许支持表格语法。该选项要求 gfm 为true。 */
  pedantic: true,//尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  /*sanitize: false,//对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true,//用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: false,//使用更为时髦的标点，比如在引用语法中加入破折号。
  highlight: function (code,lang,callback) {
    return hljs.highlightAuto(code).value;
  }*/
});


/*Vue.directive('md', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding, vnode) {
    let val = el.innerHTML.replace(/&gt;/mig,'>');
    console.log(el.innerHTML);
    console.log(val);

    console.log(marked(el.innerHTML));
    el.innerHTML = marked(el.innerHTML)
  }
})*/

export default {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding, vnode) {
    let val = el.innerHTML.replace(/&gt;/mig,'>');
    /*console.log(el.innerHTML);
    console.log(val);
    console.log(marked(el.innerHTML));*/
   /* console.log('innerHTML',el.innerHTML);
    console.log('val',val);*/
    el.innerHTML = marked(val)
  }
}