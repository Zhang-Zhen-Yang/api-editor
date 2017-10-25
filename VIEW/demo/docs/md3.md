## HELLO WORLD
Updated Time:2017-10-19 15:50:38

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column

- [x] This is a complete item
- [ ] This is an incomplete item
- [x] This is a complete item

***

*这是斜体*

**这是粗体**

- list
	- list
	- list

1. list
	1. list
	2. list

```javascript
	let a= 'apple';
	alert(a);
```



* 方便的`导入导出`功能
*  直接把一个markdown的文本文件拖放到当前这个页面就可以了
*  导出为一个html格式的文件，样式一点也不会丢失
* 编辑和预览`同步滚动`，所见即所得（右上角设置）
* `VIM快捷键`支持，方便vim党们快速的操作 （右上角设置）
* 强大的`自定义CSS`功能，方便定制自己的展示
* 有数量也有质量的`主题`,编辑器和预览区域
* 完美兼容`Github`的markdown语法
* 预览区域`代码高亮`
* 所有选项自动记忆



> 袁奇苗 栽植

```graph
digraph G {

	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [style=filled,color=white];
		a0 -> a1 -> a2 -> a3;
		label = "process #1";
	}

	subgraph cluster_1 {
		node [style=filled];
		b0 -> b1 -> b2 -> b3;
		label = "process #2";
		color=blue
	}
	start -> a0;
	start -> b0;
	a1 -> b3;
	b2 -> a3;
	a3 -> a0;
	a3 -> end;
	b3 -> end;

	start [shape=Mdiamond];
	end [shape=Msquare];
}
```

```graph
digraph g { a -> b; end [shape = egg fillcolor=yellow]}
```
```graph
digraph G {
  { 
    node [margin=0 fontcolor=blue fontsize=32 width=0.5 shape=circle style=filled]
    b [fillcolor="#088bc3" fill=white fixedsize=true]
    d [fixedsize=shape label="an even longer label"]
  }
  a -> {c d}
  b -> {c d}
}
```

```graph
digraph abc{
	node[shape="record" fontcolor="blue"]
	edge[style="dashed"]
	a[style="filled" color="#ff0000" fillcolor="#00ff00"];
	b;
	c;
	d;
	a->b;
	b->d;
	c->d;
}
```

![](http://img1.gamersky.com/image2017/10/20171019_sy_225_4/gamersky_01small_02_201710191026C7B.jpg)

![](http://img1.gamersky.com/image2017/10/20171019_sy_225_4/gamersky_02small_04_201710191026325.jpg)

![](http://img1.gamersky.com/image2017/10/20171019_sy_225_4/gamersky_01small_02_20171019104279A.jpg)

![](http://img1.gamersky.com/image2017/10/20171019_sy_225_4/gamersky_02origin_03_201710191042A35.jpg)

![](http://img1.gamersky.com/image2017/10/20171019_sy_225_4/gamersky_04small_08_201710191042998.jpg)