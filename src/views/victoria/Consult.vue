<template>
	<div id="consult">
		<div class="consult-content">
			<span>请填写下面的表格给我们留言（*必填）</span>
			<div style="width:100%;height:0.005rem;background:#999;margin:0.2rem 0;"></div>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="*您的姓名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="*联系方式">
					<el-input v-model="form.phone"></el-input>
				</el-form-item>
				<el-form-item label="QQ邮箱">
					<el-input v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item label="*留言内容" prop="desc">
					<el-input type="textarea" v-model="form.desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="onSubmit">提交留言</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
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
	data() {
		return {
			form: {
				name: '',
				phone: '',
				email: '',
				desc: ''
			}
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!');
		}
	}
}
</script>
<style lang="scss">
	#consult {
		.consult-content {
			width: 80%;
			margin-left: 10%;
			box-sizing: border-box;
			padding: 0.5rem;
			border: 1px solid #999;
			font-size: 0.16rem;
			margin-bottom: 0.5rem;
		}
	}
</style>

