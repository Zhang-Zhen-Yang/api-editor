export default {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el,binding, vnode) {
		console.log(vnode);
    console.log(el.innerHTML);
  }
}