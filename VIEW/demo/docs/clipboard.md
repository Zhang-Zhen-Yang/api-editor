## CLIPBOARD
参数 | 值 | 说明 |
------------ | -------------| -------|
tag | v-clipboard| 自定义标签 
attribute | text | 要复制的文本内容
attribute | target | id 值;如果id 对应用的元素为input，textarea,取其value 值;如果id 对应用的元素为其他元素，取其innerHTML 值
event | success | 复制成功时回调，回调值 { action: String, text: String, trigger: Object};
event | error | 复制失败时回调，回调值 { action: String, trigger: Object};
 
> text 属性优先级高于target;

### 示例

#### 复制内容来自text属性

<v-row>
	<div v-column.left="0.2" style="padding-top:20px;">
		<v-clipboard :text="'apple'">
			<button>
				点击复制文本
			</button>
		</v-clipboard>
	</div>
	<div v-column.right="0.8">
		<v-code :templateId="'code'">
		</v-code>
	</div>
</v-row>

#### 复制内容来自文本框

<v-row>
	<div v-column.left="0.2" style="padding-top:20px;">
		<v-clipboard :target="'input'">
			<button>
				点击复制下列内容
			</button>
		</v-clipboard>
		<textarea type="text" id="input"></textarea>
	</div>
	<div v-column.right="0.8">
		<v-code :templateId="'code2'">
		</v-code>
	</div>
</v-row>


#### 复制内容来自innerHTML

<v-row>
	<div v-column.left="0.2" style="padding-top:20px;">
		<v-clipboard :target="'code3'">
			<button>
				点击复制右边内容
			</button>
		</v-clipboard>
	</div>
	<div v-column.right="0.8">
		<v-code :templateId="'code3'">
		</v-code>
	</div>
</v-row>


#### 点击成功事件回调

<v-row>
	<div v-column.left="0.2" style="padding-top:20px;">
		<v-clipboard :text="'https://www.bilibili.com/'"  @success="function(e){window.alert(window.JSON.stringify(e))}">
			<button>
				点击复制bilibili网址
			</button>
		</v-clipboard>
	</div>
	<div v-column.right="0.8">
		<v-code :templateId="'code4'">
		</v-code>
	</div>
</v-row>

<script type="x-template" id="code">
<v-clipboard :text="'apple'">
	<button>
		点击复制文本
	</button>
</v-clipboard>
</script>

<script type="x-template" id="code2">
<v-clipboard :target="'input'">
	<button>
		点击复制下列内容
	</button>
</v-clipboard>
<textarea type="text" id="input"></textarea>
</script>

<script type="x-template" id="code3">
<v-clipboard :target="'code3'">
	<button>
		点击复制右边内容
	</button>
</v-clipboard>
</script>

<script type="x-template" id="code4">
<v-clipboard :text="'https://www.bilibili.com/'"  @success="function(e){window.alert(window.JSON.stringify(e))}">
	<button>
		点击复制bilibili网址
	</button>
</v-clipboard>
</script>