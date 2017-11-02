## ROW
参数 | 值 | 说明 |
------------ | -------------| -------|
tag | v-row| 自定义标签 
attribute | css | css样式的对象表达式，驼峰写法 
 
> v-row组件提供了一个div容器，防止因内部元素左右浮动而父元素无法撑高的问题;可以搭配v-column 指令使用;

### 示例
<v-row :css="{backgroundColor:'#efefef'}">
	<div style="float:left;width:150px;height:150px;backgroundColor:#ccc;">
		左
	</div>
	<div style="float:right;width:150px;height:150px;backgroundColor:gold;">
		右
	</div>	
</v-row>

### 代码
<v-code :templateId="'code'">
</v-code>

<script type="x-template" id="code">
<v-row :css="{backgroundColor:'#efefef'}">
	<div style="float:left;width:150px;height:150px;backgroundColor:#ccc;">
		左
	</div>
	<div style="float:right;width:150px;height:150px;backgroundColor:gold;">
		右
	</div>	
</v-row>
</script>