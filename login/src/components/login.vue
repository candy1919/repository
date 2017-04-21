<template>
	<div>
		<v-header title="登录">
			<router-link>返回</router-link>
		</v-header>
		<!-- 阻止页面重载 -->
		<form class="login" v-on:submit.prevent="submit">
			<div class="line">
				<div v-if="!form.id">id不能为空</div>
				<input type="number" v-model="form.id" placeholder="输入你的id">
			</div>
			<div class="line">
				<div v-if="!form.name">用户名不能为空</div>
				<input type="text" v-model="form.name" placeholder="用户名不能为空">
			</div>
			<button>登录</button>
		</form>
	</div>
</template>
<script>
import {mapActions} from 'vuex'
import {USERSIGNIN} from '../store/user'
export default{
	data () {
		return{
			btn:false,
			form:{
				id:'',
				name:''
			}
		}
	},
	methods:{
		...mapActions([USERSIGNIN]),
		submit(){
			this.btn=true
			if(!this.form.id||!this.form.name) return
			this.USERSIGNIN(this.form)
			this.$router.go(-1);
		}
	}
}
</script>
<style lang="less" scoped>
.login {
	padding: 50px;
	text-align: center;
	.line {
		padding: 5px;
		input {
			padding: 0 10px;
			line-height: 28px;
		}
	}
	button {
		padding: 0 20px;
		margin-top: 20px;
		line-height: 28px;
	}
}
</style>