<template>
  <div id="show">
		<div class="show-content">
			<div class="show-left">
				<el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item>维密秀</el-breadcrumb-item>
				</el-breadcrumb>
				<div class="left-title">
					<span>维密SHOW</span>
				</div>
				<el-row class="tac">
					<el-col :span="12">
						<el-menu
							default-active="2"
							class="el-menu-vertical-demo"
							@open="handleOpen"
							@close="handleClose">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航一</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="1-1">选项1</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="2">
								<template slot="title">
									<i class="el-icon-menu"></i>
									<span>导航二</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="2-1">选项1</el-menu-item>
									<el-menu-item index="2-2">选项2</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
							<el-submenu index="3">
								<template slot="title">
									<i class="el-icon-document"></i>
									<span>导航三</span>
								</template>
								<el-menu-item-group>
									<el-menu-item index="3-1">选项1</el-menu-item>
									<el-menu-item index="3-2">选项2</el-menu-item>
									<el-menu-item index="3-2">选项3</el-menu-item>
								</el-menu-item-group>
							</el-submenu>
						</el-menu>
					</el-col>
				</el-row>
			</div>
			<div class="show-right">
				<div class="right-img">
					<div>
						<img src="../../assets/images/img46.jpg"><br>
						<span>Gisele Bundchen·巴西</span>
					</div>
					<div>
						<img src="../../assets/images/img47.jpg"><br>
						<span>Adriana Lima·巴西</span>
					</div>
					<div>
						<img src="../../assets/images/img48.jpg"><br>
						<span>Karolina Kurkova·捷克</span>
					</div><div>
						<img src="../../assets/images/img49.jpg"><br>
						<span>何穗·中国</span>
					</div>
					<div>
						<img src="../../assets/images/img50.jpg"><br>
						<span>Alessandra Ambrosio·巴西</span>
					</div>
					<div>
						<img src="../../assets/images/img53.jpg"><br>
						<span>Erin Heatherton·美国</span>
					</div><div>
						<img src="../../assets/images/img56.jpg"><br>
						<span>Alessandra Ambrosio·巴西</span>
					</div>
					<div>
						<img src="../../assets/images/img59.jpg"><br>
						<span>刘雯·中国</span>
					</div>
				</div>
				<el-pagination
					background
					layout="prev, pager, next"
					:total="100">
				</el-pagination>
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
  },
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>
<style lang="scss">
	#show {
		.show-content {
			display: flex;
			width: 100%;
			margin-bottom: 0.5rem;
			padding: 0 1rem;
			box-sizing: border-box;
			.show-left {
				width: 25%;
				.left-title {
					position: relative;
					width: 50%;
					height: 0.01rem;
					margin-bottom: 0.5rem;
					background: #999;
					span {
						position: absolute;
						top: -0.15rem;
						left: 0.35rem;
						color: #555;
						font-size: 0.18rem;
						font-weight: bolder;
						background: #fff;
					}
				}
				.breadcrumb {
					font-size: 0.15rem;
					color: #112d2e;
					margin-bottom: 0.5rem;
				}
			}
			.show-right {
				width: 80%;
				padding: 0.2rem;
				border: 1px solid #999;
				.right-img {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					text-align: center;
					div {
						height: 3rem;
						margin-bottom: 0.5rem;
						border: 1px dotted #999;
						font-size: 0.16rem;
							img {
							margin-bottom: 0.2rem;
						}
					}
				}
			}
		}
	}
</style>


