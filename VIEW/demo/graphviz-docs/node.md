## node节点

>节点主要有  polygon-based, record-based 和 user-defined 三种。

### Polygon-based Nodes

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	在 node节点 右边中括号中定义shape 值，则以下节点为此形态;可用的形状及其名如下：

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box 
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box 
}
```
</markdown>
</div>
</v-row>

```graph
digraph G {
  node [shape=box]
	box 

  node [shape=polygon]
	polygon

  node [shape=ellipse]
	ellipse

  node [shape=oval]
	oval
}
```

---------------------------------
```graph
digraph G {
  node [shape=circle]
	circle

  node [shape=point]
	point [label="point"]

  node [shape=egg]
	egg

  node [shape=triangle]
	triangle
}
```
---------------------------------
```graph
digraph G {
  node [shape=plaintext]
	plaintext

  node [shape=plain]
	plain 

  node [shape=diamond]
	diamond

  node [shape=trapezium]
	trapezium
}
```
---------------------------------
```graph
digraph G {
  node [shape=parallelogram	]
	parallelogram	

  node [shape=house]
	house 

  node [shape=pentagon]
	pentagon

  node [shape=hexagon]
	hexagon
}
```
---------------------------------
```graph
digraph G {
  node [shape=septagon	]
	septagon	

  node [shape=octagon]
	octagon 

  node [shape=doublecircle]
	doublecircle

  node [shape=	doubleoctagon]
		doubleoctagon
}
```
---------------------------------
```graph
digraph G {
  node [shape=tripleoctagon	]
	tripleoctagon	

  node [shape=invtriangle]
	invtriangle 

  node [shape=invtrapezium]
	invtrapezium

  node [shape=	invhouse]
		invhouse
}
```
---------------------------------
```graph
digraph G {
  node [shape=Mdiamond	]
	Mdiamond	

  node [shape=Msquare]
	Msquare 

  node [shape=Mcircle]
	Mcircle

  node [shape=	rect]
		rect
}
```
---------------------------------
```graph
digraph G {
  node [shape=rectangle	]
	rectangle	
  node [shape=square]
	square 
  node [shape=star]
	star
  node [shape=	none]
	none
}
```
---------------------------------
```graph
digraph G {
	node [shape=underline	]
	underline

	node [shape=cylinder]
	cylinder

  node [shape=note]
	note
	
	node [shape=	tab]
	tab
}
```
---------------------------------
```graph
digraph G {
	node [shape=folder	]
	folder

	node [shape=box3d]
	box3d

  node [shape=component]
	component

	node [shape=	promoter]
	promoter
}
```
---------------------------------
```graph
digraph G {
	node [shape=cds	]
	cds

	node [shape=terminator]
	terminator

  node [shape=utr]
	utr

	node [shape=primersite]
	primersite
}
```
---------------------------------
```graph
digraph G {
	node [shape=restrictionsite	]
	restrictionsite

	node [shape=terminator]
	fivepoverhang

  node [shape=threepoverhang]
	threepoverhang

	node [shape=noverhang]
	noverhang
}
```
---------------------------------
```graph
digraph G {
	node [shape=assembly	]
	assembly

	node [shape=signature]
	signature

  node [shape=insulator]
	insulator

	node [shape=ribosite]
	ribosite
}
```
---------------------------------
```graph
digraph G {
	node [shape=rnastab]
	rnastab

	node [shape=proteasesite]
	proteasesite

  node [shape=proteinstab]
	proteinstab

	node [shape=rpromoter]
	rpromoter
}
```
---------------------------------
```graph
digraph G {
	node [shape=rarrow]
	rarrow					

	node [shape=larrow]
	larrow

  node [shape=lpromoter]
	lpromoter

}
```


### record-based

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	在 node 定义处 右边中括号中定义shape 为 record 值,在节点中定义 label 值，值用 | 隔开，尖括号表示锚点

</div>
<div v-column.left="0.4">
<markdown>
```
digraph g {
    node [shape="record", height=.1];
    node0[label="<f0> |<f1> G|<f2>"];
    node1[label="<f0> |<f1> E|<f2>"];
    node2[label="<f0> |<f1> B|<f2>"];
    node0:f0 -> node1:f1;
    node0:f2 -> node2:f1;
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph g {
    node [shape="record", height=.1];
    node0[label="<f0> |<f1> G|<f2>"];
    node1[label="<f0> |<f1> E|<f2>"];
    node2[label="<f0> |<f1> B|<f2>"];
    node0:f0 -> node1:f1;
    node0:f2 -> node2:f1;
}
```
</markdown>
</div>
</v-row>

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	记录形式的节点也可以是竖形排列的。与横向排列的记录的不同只是label的形式不同，label中内容使用{}包围则是竖形排列的。代码如下

</div>
<div v-column.left="0.4">
<markdown>
```
digraph g {
    node [shape="record", height=.1];
    node0[label="{<f0> |<f1> G|<f2>}"];
    node1[label="{<f0> |<f1> E|<f2>}"];
    node2[label="{<f0> |<f1> B|<f2>}"];
    node0:f0 -> node1:f1;
    node0:f2 -> node2:f1;
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph g {
    node [shape="record", height=.1];
    node0[label="{<f0> |<f1> G|<f2>}"];
    node1[label="{<f0> |<f1> E|<f2>}"];
    node2[label="{<f0> |<f1> B|<f2>}"];
    node0:f0 -> node1:f1;
    node0:f2 -> node2:f1;
}
```
</markdown>
</div>
</v-row>
