## 进阶

> 数据结构的可视化 实际开发中，经常要用到的是对复杂数据结构的描述，graphviz提供完善的机制来绘制此类图形。

### 一个hash表的数据结构
比如一个hash表的内容，可能具有下列结构：

<v-row>
<div v-column.left="0.7">
<markdown>
```
struct st_hash_type {
	int (*compare) ();
	int (*hash) ();
};

struct st_table_entry {
	unsigned int hash;
	char *key;
	char *record;
	st_table_entry *next;
};

struct st_table {
	struct st_hash_type *type;
	int num_bins; /* slot count */
	int num_entries; /* total number of entries */
	struct st_table_entry **bins; /* slot */
};
```
</markdown>
</div>
</v-row>
从代码上看，由于结构体存在引用关系，不够清晰，如果层次较多，则很难以记住各个结构之间的关系，我们可以通过下图来更清楚的展示：

<v-row>
	<div v-column.left="0.3">
<markdown>
```graph
digraph st2{
	fontname = "Verdana";
	fontsize = 10;
	rankdir=TB;

	node [fontname = "Verdana", fontsize = 10, color="skyblue", shape="record"];
	edge [fontname = "Verdana", fontsize = 10, color="crimson", style="solid"];

	st_hash_type [label="{<head>st_hash_type|(*compare)|(*hash)}"];
	st_table_entry [label="{<head>st_table_entry|hash|key|record|<next>next}"];
	st_table [label="{st_table|<type>type|num_bins|num_entries|<bins>bins}"];

	st_table:bins -> st_table_entry:head;
	st_table:type -> st_hash_type:head;
	st_table_entry:next -> st_table_entry:head [style="dashed", color="forestgreen"];
}
```
</markdown>
</div>
<div v-column.right="0.7">
<markdown>
```
digraph st2{
	fontname = "Verdana";
	fontsize = 10;
	rankdir=TB;

	node [fontname = "Verdana", fontsize = 10, color="skyblue", shape="record"];
	edge [fontname = "Verdana", fontsize = 10, color="crimson", style="solid"];

	st_hash_type [label="{<head>st_hash_type|(*compare)|(*hash)}"];
	st_table_entry [label="{<head>st_table_entry|hash|key|record|<next>next}"];
	st_table [label="{st_table|<type>type|num_bins|num_entries|<bins>bins}"];

	st_table:bins -> st_table_entry:head;
	st_table:type -> st_hash_type:head;
	st_table_entry:next -> st_table_entry:head [style="dashed", color="forestgreen"];
}
```
</markdown>
	</div>
</v-row>

应该注意到，在顶点的形状为”record”的时候，label属性的语法比较奇怪，但是使用起来非常灵活。比如，用竖线”|”隔开的串会在绘制出来的节点中展现为一条分隔符。用”<>”括起来的串称为锚点，当一个节点具有多个锚点的时候，这个特性会非常有用，比如节点st_table的type属性指向st_hash_type，第4个属性指向st_table_entry等，都是通过锚点来实现的。

我们发现，使用默认的dot布局后，绿色的这条边覆盖了数据结构st_table_entry，并不美观，因此可以使用别的布局方式来重新布局，如使用circo算法：


<v-row>
<div v-column.left="0.7">
<markdown>
```graph
	digraph st{
		
	fontname = "Verdana";
	fontsize = 10;
	rankdir = LR;
	rotate = 90;
		
	node [ shape="record", width=1, height=1];
	node [fontname = "Verdana", fontsize = 10, color="skyblue", shape="record"];
	
	edge [fontname = "Verdana", fontsize = 10, color="crimson", style="solid"];
	node [shape="plaintext"];
	st_table [label= <
			<table border="0" cellborder="1" cellspacing="0" align="left">
				<tr>
					<td>st_table</td>
				</tr>
				<tr>
					<td>num_bins=5</td>
				</tr>
				<tr>
					<td>num_entries=3</td>
				</tr>
				<tr>
					<td port="bins">bins</td>
				</tr>
			</table>
	>];
	
	node [shape="record"];
	num_bins [label=" <b1> | <b2> | <b3> | <b4> | <b5> ", height=2];
	node[ width=2 ];
	
	entry_1 [label="{<e>st_table_entry|<next>next}"];
	entry_2 [label="{<e>st_table_entry|<next>null}"];
	entry_3 [label="{<e>st_table_entry|<next>null}"];
	
	st_table:bins -> num_bins:b1;
	num_bins:b1 -> entry_1:e;
	entry_1:next -> entry_2:e;
	num_bins:b3 -> entry_3:e;
	
}
```
</markdown>
</div>
<div v-column.right="0.3">
</div>
</v-row>





