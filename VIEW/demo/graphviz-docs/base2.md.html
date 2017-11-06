## 基础2

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

我们发现，使用默认的dot布局后，绿色的这条边覆盖了数据结构st_table_entry，并不美观，因此可以使用别的布局方式来重新布局，如使用circo算法。

### 软件模块组成图
在实际的开发中，随着系统功能的完善，软件整体的结构会越来越复杂，通常开发人员会将软件划分为可理解的多个子模块，各个子模块通过协作，完成各种各样的需求。

下面有个例子，是某软件设计时的一个草稿：



<v-row>
<div v-column.left="0.7">
<markdown>
```graph
digraph idp_modules{

  rankdir = TB;
  fontname = "Microsoft YaHei";
  fontsize = 12;
  
  node [ fontname = "Microsoft YaHei", fontsize = 12, shape = "record" ];
  edge [ fontname = "Microsoft YaHei", fontsize = 12 ];
  
      subgraph cluster_sl{
          label="IDP支持层";
          bgcolor="mintcream";
          node [shape="Mrecord", color="skyblue", style="filled"];
          network_mgr [label="网络管理器"];
          log_mgr [label="日志管理器"];
          module_mgr [label="模块管理器"];
          conf_mgr [label="配置管理器"];
          db_mgr [label="数据库管理器"];
      };
  
      subgraph cluster_md{
          label="可插拔模块集";
          bgcolor="lightcyan";
          node [color="chartreuse2", style="filled"];
          mod_dev [label="开发支持模块"];
          mod_dm [label="数据建模模块"];
          mod_dp [label="部署发布模块"];
      };
  
  mod_dp -> mod_dev [label="依赖..."];
  mod_dp -> mod_dm [label="依赖..."];
  mod_dp -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
  mod_dev -> mod_dm [label="依赖..."];
  mod_dev -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
  mod_dm -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
}
```
</markdown>
</div>
<div v-column.right="0.3">

</div>
</v-row>
IDP支持层为一个相对独立的子系统，其中包括如数据库管理器，配置信息管理器等模块，另外为了提供更大的灵活性，将很多其他的模块抽取出来作为外部模块，而支持层提供一个模块管理器，来负责加载/卸载这些外部的模块集合。

这些模块间的关系较为复杂，并且有部分模块关系密切，应归类为一个子系统中，上图对应的dot脚本为：
<markdown>
```
digraph idp_modules{

  rankdir = TB;
  fontname = "Microsoft YaHei";
  fontsize = 12;
  
  node [ fontname = "Microsoft YaHei", fontsize = 12, shape = "record", width=0.1, height=0.1 ];
  edge [ fontname = "Microsoft YaHei", fontsize = 12 ];
  
      subgraph cluster_sl{
          label="IDP支持层";
          bgcolor="mintcream";
          node [shape="Mrecord", color="skyblue", style="filled"];
          network_mgr [label="网络管理器"];
          log_mgr [label="日志管理器"];
          module_mgr [label="模块管理器"];
          conf_mgr [label="配置管理器"];
          db_mgr [label="数据库管理器"];
      };
  
      subgraph cluster_md{
          label="可插拔模块集";
          bgcolor="lightcyan";
          node [color="chartreuse2", style="filled"];
          mod_dev [label="开发支持模块"];
          mod_dm [label="数据建模模块"];
          mod_dp [label="部署发布模块"];
      };
  
  mod_dp -> mod_dev [label="依赖..."];
  mod_dp -> mod_dm [label="依赖..."];
  mod_dp -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
  mod_dev -> mod_dm [label="依赖..."];
  mod_dev -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
  mod_dm -> module_mgr [label="安装...", color="yellowgreen", arrowhead="none"];
}
```
</markdown>





