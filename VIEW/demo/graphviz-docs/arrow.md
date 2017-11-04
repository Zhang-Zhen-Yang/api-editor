## 箭头

<v-row>
<div v-column.left="0.4" style="padding-top:25px;">
	右边中括号中定义arrowhead 值，则以下节点为此形态;可用的箭头形状及其名如下：

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
digraph arrow{	
	1->2 [arrowhead = box,label="box"]
}
```
</markdown>
</div>
</v-row>

```graph
digraph arrow{	
	1->2 [arrowhead = box,label="box"]
	3->4 [arrowhead = lbox,label="lbox"]
	5->6 [arrowhead = rbox,label="rbox"]
	7->8 [arrowhead = obox,label="obox"]
	9->10 [arrowhead = olbox,label="olbox"]
	11->12 [arrowhead = orbox,label="orbox"]
}
```
-------------

```graph
digraph arrow{	
	1->2 [arrowhead = crow,label="crow"]
	3->4 [arrowhead = lcrow,label="lcrow"]
	5->6 [arrowhead = rcrow,label="rcrow"]

}
```
-----------
```graph
digraph arrow{	
	1->2 [arrowhead = diamond,label="diamond"]
	3->4 [arrowhead = ldiamond,label="ldiamond"]
	5->6 [arrowhead = rdiamond,label="rdiamond"]
	7->8 [arrowhead = odiamond,label="odiamond"]
	9->10 [arrowhead = oldiamond,label="oldiamond"]
	11->12 [arrowhead = ordiamond,label="ordiamond"]
}
```
-----------
```graph
digraph arrow{	
	1->2 [arrowhead = dot,label="dot"]
	3->4 [arrowhead = odot,label="odot"]
}
```
-----------
```graph
digraph arrow{	
	1->2 [arrowhead = inv,label="inv"]
	3->4 [arrowhead = linv,label="linv"]
	5->6 [arrowhead = rinv,label="rinv"]
	7->8 [arrowhead = oinv,label="oinv"]
	9->10 [arrowhead = olinv,label="olinv"]
	11->12 [arrowhead = orinv,label="orinv"]
}
```
-------------
```graph
digraph arrow{	
	1->2 [arrowhead = none,label="none"]
}
```
-------------
```graph
digraph arrow{	
	1->2 [arrowhead = normal,label="normal"]
	3->4 [arrowhead = lnormal,label="lnormal"]
	5->6 [arrowhead = rnormal,label="rnormal"]
	7->8 [arrowhead = onormal,label="onormal"]
	9->10 [arrowhead = olnormal,label="olnormal"]
	11->12 [arrowhead = ornormal,label="ornormal"]
}
```
-------------
```graph
digraph arrow{	
	1->2 [arrowhead = tee,label="tee"]
	3->4 [arrowhead = ltee,label="ltee"]
	5->6 [arrowhead = rtee,label="rtee"]
}
```
-------------
```graph
digraph arrow{	
	1->2 [arrowhead = vee,label="vee"]
	3->4 [arrowhead = lvee,label="lvee"]
	5->6 [arrowhead = rvee,label="rvee"]
}
```
-------------
```graph
digraph arrow{	
	1->2 [arrowhead = curve,label="curve"]
	3->4 [arrowhead = lcurve,label="lcurve"]
	5->6 [arrowhead = rcurve,label="rcurve"]
	7->8 [arrowhead = icurve,label="icurve"]
	9->10 [arrowhead = licurve,label="licurve"]
	11->12 [arrowhead = ricurve,label="ricurve"]
}
```
-------------
