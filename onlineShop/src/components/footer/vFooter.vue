<template>
	<div class="footer-wrap">
		<i class="icon-car"></i>
		<div class="price-wrap">
			<p class="price">
				<span>￥</span><span>300</span>
			</p>
			<span class="br">|</span>
			<p class="delivery">另需配送费<span>4</span>元</p>
		</div>
		<a href="javascript:" class="submit">￥<span>20</span>元起送</a>
	</div>	
</template>
<script>
	export default{
		data(){
			return {
				data:0
			};
		}
	}
</script>
<style lang="less" scoped>
@import "../../assets/less/common.less";
.br{
	margin: 0 10px;
}
.footer-wrap{
	position: fixed;
	padding-left:60px; 
	color: white;
	background: rgba(0, 0, 0, 0.5);
}
.icon-car{
	.icon(40px,40px);
	position:absolute;
	left:15px;
	top:-15px;
	background-image: url('../../assets/logo.png');
}
.price-wrap{
	margin: 15px 0;
	.price{
		display: inline-block;
		font-size: 15px;
		font-weight: bold;
	}
	.delivery{
		font-size: 12px;
	}
}
.submit{
	position: absolute;
	right: 0;
	top:0;
	padding: 10px;
}
</style>