<template>
	<div>
		<v-header title="首页">
			<router-link slot="right" to="/home" v-if="user.id">{{user.name}}</router-link>
		</v-header>
		<div class="login-msg" v-if="!user.id">
			<router-link to="/login">请登录</router-link>
		</div>
		<div class="msg" v-if="user.id">
			哈哈，恭喜你已经入坑Vue2
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
    export default {
        computed: mapState({ user: state => state.user }),
    }
</script>