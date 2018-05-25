<template>
  <div class="notice">
		<ul class="notice-li" ref="notice_li">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
</template>
<script>
export default {
	data () {
		return{}
	},
	created () {
		this.$nextTick(() => {
			this.$refs.notice_li.style.left = '100px'
			let num = 0
			// this.init(num)
		})
	},
	methods: {
		init (num) {
			setInterval (() => {
				if (num < -750) {
					num = 0
				} else {
					num -= 50
					this.$refs.notice_li.style.left = num + 'px'
				}
				// console.log(this.$refs.notice_li.style.left)
			}, 1000)
		}
	}
}
</script>
<style lang="scss">
.notice {
	width: 500px;
	height: 80px;
	overflow: hidden;
	position: relative;
	left: 100px;
	top: 100px;
	.notice-li {
		width: 10000px;
		height: 50px;
		display: flex;
		position: absolute;
		left: 0; 
		top: 0;
		list-style: none;
		overflow: hidden;
		li {
		width: 100px;
		height: 50px;
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
