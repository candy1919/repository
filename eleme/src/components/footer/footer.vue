<template>
	<div class="footer">
		<div class="inf-cart">
			<div class="wrap-cart">
				<i class="icon-shopping_cart"></i>
			</div>
			<p class="total"><span>￥</span><span>0</span></p>
			<p class="line-vertical wrap"></p>
			<p class="send">另需配送费￥<span>4</span>元</p>
		</div>
		<div class="submit">
			<a>￥<span>20</span>起送</a>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.wrap{
		margin: 0 24px/@devicePixelRatio;
	}
	.footer{
		display: flex;
		left: 0;
		right: 0;
		bottom: 0;
		position:fixed;
		padding-left:160px/@devicePixelRatio; 
		background: #141d27;
		.inf-cart{
			flex:1;
		}
		.wrap-cart{
			position: absolute;
			left:36px/@devicePixelRatio;
			top:-10px;
			margin-right: 36px/@devicePixelRatio;
			padding: 12px/@devicePixelRatio;
			border-radius: 50%;
			background: #141d27;
			i{
				display: flex;
			    align-items: center;
			    justify-content: center;
				width: 88px/@devicePixelRatio;
				height: 88px/@devicePixelRatio;
				background: rgba(0, 0, 0, 0.2);
				font-size: 48px/@devicePixelRatio;
				color: rgba(255, 255, 255, 0.4);
				line-height: 48px/@devicePixelRatio;
				border-radius: 50%;
			}
		}
		p{
			display: inline-block;
			padding: 24px/@devicePixelRatio 0;
		}
		.total{
			font-size: 32px/@devicePixelRatio;
			color: rgba(255, 255, 255, 0.4);
			font-weight: 700/@devicePixelRatio;
			line-height: 48px/@devicePixelRatio;
		}
		.send{
			font-size: 32px/@devicePixelRatio;
			color: rgba(255, 255, 255, 0.4);
			line-height: 48px/@devicePixelRatio;
		}
		.submit{
			display: flex;
		    align-items: center;
		    justify-content: center;
			box-sizing: border-box;
			width:210px/@devicePixelRatio;
			padding: 0 16px/@devicePixelRatio;
			background: rgba(0, 0, 0, 0.2);
			a{
				font-size: 24px/@devicePixelRatio;
				color: rgba(255, 255, 255, 0.4);
				font-weight: 700/@devicePixelRatio;
				line-height: 48px/@devicePixelRatio;
			}
		}
	}
</style>