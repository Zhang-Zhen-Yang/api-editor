## CENTER

参数 | 值 | 说明 |
------------ | -------------| -------|
tag | v-center| 自定义标签 
attribute | css | v-center的样式
attribute | type | 居中类型emun{'middle','center','centerInParent'};middle为垂直居中;center为水平居中;centerInParent为水平垂直居中，此为默认值。


 
> v-center 所包围的元素相对于v-center处于居中位置。水平居中，垂直居中和水平垂直居中。

<v-row>
<v-center v-column.left="0.4" :css="{width:'100%',height: '180px', backgroundColor:'#efefef'}">
	<img src="http://pixiv-zingaro.jp/wp-content/uploads/eromanga-sensei_main.jpg?pub" 
	alt="" 
	style="width:200px;">
</v-center>
<div v-column.left="0.6">
	<v-code  :templateId="'code'">
	</v-code>
</div>
</v-row>

<script type="x-template" id="code">
<v-center v-column.left="0.4" :css="{width:'100%',height: '180px', backgroundColor:'#efefef'}">
	<img src="http://pixiv-zingaro.jp/wp-content/uploads/eromanga-sensei_main.jpg?pub" 
	alt="" 
	style="width:200px;">
</v-center>
</script>
