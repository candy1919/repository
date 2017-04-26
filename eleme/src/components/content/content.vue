<template>
	<div>
		<div class="tab">
			<router-link to="/goods" class="tab-item">商品</router-link>
			<router-link to="/ratings" class="tab-item">评价</router-link>
			<router-link to="/seller" class="tab-item">商家</router-link>
		</div>
		<div class="line"></div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.tab{
		@h1:28px/@devicePixelRatio;
		@h2:80px/@devicePixelRatio;
		display: flex;
		align-items:center;
		height: @h2;
		.tab-item{
			flex:1;
			font-size:@h1 ;
			text-align: center;
			color:rgb(77, 85, 93);
		}
	}
	.red{
		color: rgb(240, 20, 20);
	}
</style>