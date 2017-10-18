//import Vue from 'vue'
const marked = require('marked');
const hljs = require('highlight.js');
//const {rendererCode, rendererListitem, rendererHtml, rendererHeading} = require('../js/utils.js');
let render = new marked.Renderer();
render.listitem = (text) => {
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

marked.setOptions({
  renderer: render,
  gfm: true,//允许 Git Hub标准的markdown.
  tables: true,//允许支持表格语法。该选项要求 gfm 为true。
  breaks: false,//允许回车换行。该选项要求 gfm 为true。
  pedantic: false,//尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false,//对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true,//用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: false,//使用更为时髦的标点，比如在引用语法中加入破折号。
  highlight: function (code,lang,callback) {
    return hljs.highlightAuto(code).value;
  }
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
    el.innerHTML = marked(el.innerHTML)
  }
}