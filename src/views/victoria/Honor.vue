<template>
  <div id="honor">
		<div class="honor-content">
			<div>
				<img src="../../assets/images/wing.jpg" width="100%"><br>
				<span>天使翅膀</span>
			</div>
			<div>
				<img src="../../assets/images/bra.jpg" width="100%" height="225.1"><br>
				<span>Fantasy Bra</span>
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
#honor {
	.honor-content {
		display: flex;
		justify-content: space-between;
		width: 60%;
		margin: 0 20% 5% 20%;
		font-size: 0.16rem;
		div{
			width: 4rem;
			text-align: center;
			img {
				margin-bottom: 0.2rem;
			}
		}
	}
}
</style>

