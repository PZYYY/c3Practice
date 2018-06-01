<template>
  <div class="show">
		<div class="show-left">
			<el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>活动管理</el-breadcrumb-item>
			</el-breadcrumb>
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
		<div>

		</div>
	</div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
	.show {
		width: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
		.show-left {
			width: 20%;
			.breadcrumb {
				font-size: 0.2rem;
				color: #112d2e;
				margin-bottom: 0.5rem;
			}
		}
	}
</style>


