<template>
	<div id="connection">
		<div class="connection-content">
			<div class="content-left">
				<span class="left-title">维多利亚的秘密</span>
				<span>电话：020-5451254545</span>
				<span>传真：020-5451254545</span>
				<span>主要秀场：纽约、戛纳、巴黎、上海</span>
				<span>官网：https://www.victoriassecret.com</span>
			</div>
			<div class="content-right">
				<img src="../../assets/images/map.jpg" width="100%">
			</div>
		</div>
		<my-footer></my-footer>
	</div>
</template>
<script>
import MyFooter from '@/components/victoria/MyFooter'
export default {
	components: {
    MyFooter
  }
}
</script>
<style lang="scss">
#connection {
	.connection-content {
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0 10% 5% 10%;
		font-size: 0.19rem;
		.content-left {
			width: 30%;
			display: flex;
			flex-direction: column;
			margin-top: 1rem;
			line-height: 0.5rem;
			.left-title {
				display: block;
				margin-bottom: 0.3rem;
				font-size: 0.3rem;
			}
		}
		.content-right {
			width: 60%;
		}
	}
}
</style>

