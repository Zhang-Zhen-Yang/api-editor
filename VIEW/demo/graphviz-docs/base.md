## BASE

> graphviz包含3中元素，图，顶点和边。每个元素都可以具有各自的属性，用来定义字体，样式，颜色，形状等。下面是一些简单的示例，可以帮助我们快速的了解graphviz的基本用法。

### 第一个graphviz图
比如，要绘制一个有向图，包含4个节点a,b,c,d。其中a指向b，b和c指向d。可以定义下列脚本：

<v-row>
	<div v-column.left="0.3">
<markdown>
```graph
digraph abc{ 
	a;
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d;
}
```
</markdown>
	</div>
	<div v-column.right="0.7">
<markdown>
```
digraph abc{ 
	a;
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d;
}
```
</markdown>
	</div>
</v-row>



### 定义顶点和边的样式
在digraph的花括号内，添加顶点和边的新定义：

<v-row>
	<div v-column.left="0.3">
<markdown>
```graph
digraph abc{ 
	node [shape="record"];
	edge [style="dashed"];
	a;
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d;
}
```
</markdown>
	</div>
	<div v-column.right="0.7">
<markdown>
```
digraph abc{ 
	node [shape="record"];
	edge [style="dashed"];
	a;
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d;
}
```
</markdown>
	</div>
</v-row>


### 定义顶点和边的样式
进一步，我们将顶点a的颜色改为淡绿色，并将c到d的边改为红色，脚本如下

<v-row>
	<div v-column.left="0.3">
<markdown>
```graph
digraph abc{ 
	node [shape="record"];
	edge [style="dashed"];
	a [style="filled", color="black", fillcolor="chartreuse"];
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d  [color="red"];
}
```
</markdown>
	</div>
	<div v-column.right="0.7">
<markdown>
```
digraph abc{ 
	node [shape="record"];
	edge [style="dashed"];
	a [style="filled", color="black", fillcolor="chartreuse"];
	b;
	c;
	d;

	a -> b;
	b -> d;
	c -> d  [color="red"];
}
```
</markdown>
	</div>
</v-row>

> 应当注意到，顶点和边都接受属性的定义，形式为在顶点和边的定义之后加上一个由方括号括起来的key-value列表，每个key-value对由逗号隔开。如果图中顶点和边采用统一的风格，则可以在图定义的首部定义node, edge的属性。比如上图中，定义所有的顶点为方框，所有的边为虚线，在具体的顶点和边之后定义的属性将覆盖此全局属性。如特定与a的绿色，c到d的边的红色。



### 子图的绘制
graphviz支持子图，即图中的部分节点和边相对对立(软件的模块划分经常如此)。比如，我们可以将顶点c和d归为一个子图,将c和d划分到cluster_cd这个子图中，标签为”c and d”,并添加背景色，以方便与主图区分开，绘制结果如下：

> 应该注意的是，子图的名称必须以cluster开头，否则graphviz无法设别。

<v-row>
	<div v-column.left="0.3">
<markdown>
```graph
digraph abc{

	node [shape="record"];
	edge [style="dashed"];

	a [style="filled", color="black", fillcolor="chartreuse"];
	b;

	subgraph cluster_cd{
		label="c and d";
		bgcolor="mintcream";
		c;
		d;
	}

	a -> b;
	b -> d;
	c -> d [color="red"];
 }
 
```
</markdown>
	</div>
	<div v-column.right="0.7">
<markdown>
```
digraph abc{

	node [shape="record"];
	edge [style="dashed"];

	a [style="filled", color="black", fillcolor="chartreuse"];
	b;

	subgraph cluster_cd{
		label="c and d";
		bgcolor="mintcream";
		c;
		d;
	}

	a -> b;
	b -> d;
	c -> d [color="red"];
 }
```
</markdown>
	</div>
</v-row>

