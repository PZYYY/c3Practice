<template>
  <div>
		<div class="notice">
			<div class="notice-one" ref="notice_one">
				站长之家（Chinaz.com）5月26日消息 最近，腾讯可以说遇到了不少烦心事，除了此前投资的自媒体差评被指责洗稿以外，和今日头条的纠葛一直没能解决
			</div>
		</div>
		<div class="notice2">
			<ul class="notice-li" ref="notice_li">
				<li>在vue官网上对ref的解释 </li>
				<li>ref 被用来给元素或子组件注册引用信息</li>
				<li>引用信息将会注册在父组件的 $refs 对象上</li>
				<li>如果在普通的 DOM 元素上使用</li>
				<li>引用指向的就是 DOM 元素</li>
				<li>如果用在子组件上</li>
				<li>引用就指向组件实例 </li>
				<li>比如我现在要实现的效果是点击用v-</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return{}
	},
	created () {
		this.$nextTick(() => {
			let len = this.$refs.notice_one.innerText.length * 12
			let num = 0
			let hei = this.$refs.notice_li.children.length * 30
			this.$refs.notice_one.style.left = '0px'
			this.$refs.notice_li.style.top = '0px'
			this.init(num, len)
			this.init2(num, hei)
		})
	},
	methods: {
		init (num, len) {
			setInterval (() => {
				if (num < (-len - 200)) {
					num = 500
				} else {
					num -= 10
					this.$refs.notice_one.style.left = num + 'px'
				}
				// console.log(this.$refs.notice_li.style.left)
			}, 200)
		},
		init2 (num, hei) {
			setInterval (() => {
				if (num < -hei + 60) {
					num = 30
				} else {
					num -= 30
					this.$refs.notice_li.style.top = num + 'px'
				}
			},2000)
		}
	}
}
</script>
<style lang="scss">
.notice {
	width: 500px;
	height: 50px;
	position: relative;
	left: 100px;
	top: 100px;
	overflow: hidden;
	border: solid 1px darkcyan;
	margin-bottom: 100px;
	// transition: 2000ms;
	.notice-one {
		height: 50px;
		position: absolute;
		left: 100px; 
		top: 0;
		overflow: hidden;
		white-space: nowrap;
	}
}
.notice2 {
	width: 500px;
	height: 30px;
	position: relative;
	left: 100px;
	top: 100px;
	overflow: hidden;
	border: solid 1px #000;
	.notice-li {	
		position: absolute;
		top: 0;
		left: 100px;
		list-style: none;
		overflow: hidden;
		margin: 0;
		transition: 500ms;
		li {
		width: 300px;
		height: 30px;
		}
		li:nth-child(odd) {
			background: lightblue;
		}
		li:nth-child(even) {
			background: lightsalmon;
		}
	}
}
</style>
