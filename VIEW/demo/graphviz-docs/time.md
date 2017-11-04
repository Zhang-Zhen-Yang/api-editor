## 时序图

### 时序图

<v-row>
<div v-column.left="0.5">
<markdown>
```graph
digraph G {
    rankdir="LR";
    node[shape="point", width=0, height=0];
    edge[arrowhead="none", style="dashed"]

    {
        rank="same";
        edge[style="solided"];
        LC[shape="plaintext"];
        LC -> step00 -> step01 -> step02 -> step03 -> step04 -> step05;
    }

    {
        rank="same";
        edge[style="solided"];
        Agency[shape="plaintext"];
        Agency -> step10 -> step11 -> step12 -> step13 -> step14 -> step15;
    }

    {
        rank="same";
        edge[style="solided"];
        Agent[shape="plaintext"];
        Agent -> step20 -> step21 -> step22 -> step23 -> step24 -> step25;
    }

    step00 -> step10 [label="sends email new custumer", arrowhead="normal"];
    step11 -> step01 [label="declines", arrowhead="normal"];
    step12 -> step02 [label="accepts", arrowhead="normal"];
    step13 -> step23 [label="forward to", arrowhead="normal"];
    step24 -> step14;
    step14 -> step04 [arrowhead="normal"];
}
```
rankdir=”LR”表示，布局从左L到右R。可以看到，在代码中有{}括起来的部分。

```
{
    rank="same";
    edge[style="solided"];
    Agency[shape="plaintext"];
    Agency -> step10 -> step11 -> step12 -> step13 -> step14 -> step15;
}
```

</markdown>
</div>

<div v-column.left="0.5">
<markdown>
```
digraph G {
    rankdir="LR";
    node[shape="point", width=0, height=0];
    edge[arrowhead="none", style="dashed"]

    {
        rank="same";
        edge[style="solided"];
        LC[shape="plaintext"];
        LC -> step00 -> step01 -> step02 -> step03 -> step04 -> step05;
    }

    {
        rank="same";
        edge[style="solided"];
        Agency[shape="plaintext"];
        Agency -> step10 -> step11 -> step12 -> step13 -> step14 -> step15;
    }

    {
        rank="same";
        edge[style="solided"];
        Agent[shape="plaintext"];
        Agent -> step20 -> step21 -> step22 -> step23 -> step24 -> step25;
    }

    step00 -> step10 [label="sends email new custumer", arrowhead="normal"];
    step11 -> step01 [label="declines", arrowhead="normal"];
    step12 -> step02 [label="accepts", arrowhead="normal"];
    step13 -> step23 [label="forward to", arrowhead="normal"];
    step24 -> step14;
    step14 -> step04 [arrowhead="normal"];
}
```
</markdown>
</div>

</v-row>




