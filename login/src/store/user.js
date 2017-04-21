import Vue from 'vue'
export const USERSIGNIN='USERSIGNIN'
export const USERSIGNOUT='USERSIGNOUT'
export default {
	state:
		JSON.parse(sessionStorage.getItem('user'))||{},
	mutations:{
		[USERSIGNIN] (state,user){
			sessionStorage.setItem('user',JSON.stringify(user))
			Object.assign(state,user)
		},
		[USERSIGNOUT](state){
			sessionStorage.removeItem('user')
			Object.keys(state).forEach(k=>Vue.delete(state,k))
		}
	},
	actions:{
		[USERSIGNIN]({commit},user){
			commit(USERSIGNIN,user)
		},
		[USERSIGNOUT]({commit}){
			commit(USERSIGNOUT)
		}
	}
}