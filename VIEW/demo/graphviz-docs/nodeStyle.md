## node 节点样式

### style 
节点的样式共有八种[filled, invisible, diagonals, rounded, dashed, dotted, solid and bold]

#### filled

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点是实体，可填充颜色
</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=filled,fillcolor=skyblue]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=filled,fillcolor=skyblue]
}
```
</markdown>
</div>
</v-row>

#### invisible

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点不可见
</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=invisible,fillcolor=blue]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=invisible,fillcolor=blue]
}
```
</markdown>
</div>
</v-row>

#### diagonals

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
效果看右图

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=diagonals]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=diagonals]
}
```
</markdown>
</div>
</v-row>

#### rounded

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点拐角是有弧度的

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=rounded]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=rounded]
}
```
</markdown>
</div>
</v-row>

#### dashed

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点边框是虚线

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=dashed]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=dashed]
}
```
</markdown>
</div>
</v-row>

#### dotted

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点边框是点线

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=dotted]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=dotted]
}
```
</markdown>
</div>
</v-row>

#### solid

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	节点边框是实线，此为默认值

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=solid]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=solid]
}
```
</markdown>
</div>
</v-row>

#### bold

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
节点边框是粗线

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style=bold]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style=bold]
}
```
</markdown>
</div>
</v-row>

#### 多种效果

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	在style属性中以逗号隔开

</div>
<div v-column.left="0.4">
<markdown>
```
digraph G {
	node [shape=box]
	box [style="filled,rounded" fillcolor=skyblue]
}
```
</markdown>
</div>
<div v-column.left="0.2">
<markdown>
```graph
digraph G {
	node [shape=box]
	box [style="filled,rounded" fillcolor=skyblue]
}
```
</markdown>
</div>
</v-row>