<template>
	<div>
		<div class="tab">
			<router-link to="/goods" class="tab-item">商品</router-link>
			<router-link to="/ratings" class="tab-item">评价</router-link>
			<router-link to="/seller" class="tab-item">商家</router-link>
		</div>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>
<script>
	
</script>
<style></style>