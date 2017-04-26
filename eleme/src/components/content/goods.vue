<template>
	<div class="wrap-goods">
		<div class="nav">
			<div class="nav-item">
				<span>热销榜</span>
			</div>
			<div class="nav-item">
				<i class="i-special"></i><span class="item-active">单人特色套餐</span>
			</div>
			<div class="nav-item">
				<i></i><span class="item">特色粥品</span>
			</div>
		</div>
		<div class="list">
			<p class="title">单人特色套餐</p>
			<div class="wrap-item">
			<div class="list-item">
				<div class="wrap-avatar">
					<img src="../../assets/upload/seller/header-bg.jpg">
				</div>
				<div class="item-detail">
					<p class="name">皮蛋瘦肉粥</p>
					<p class="type">咸粥</p>
					<p class="description"><span>月售1132份</span><span>好评率100%</span></p>
					<div class="price">
						<p class="price-now">￥<span>24</span></p>
						<p class="price-once">￥<span>28</span></p>
						<div class="wrap-num">
							<a class="icon-remove_circle_outline"></a>
							<span class="num">1</span>
							<a class="icon-add_circle"></a>
						</div>
						
					</div>
				</div>
			</div>
			<div class="line"></div>
			</div>
		</div>
		<vFooter></vFooter>
	</div>
</template>
<script>
export default{

}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.font-grey(@siz:20px){
		font-size: @siz/@devicePixelRatio;
		color: rgb(147,153,159);
	}
	.vertical-align(@h:30px){
		top:50%;
		margin-top:-@h/2;
	}
	.wrap-goods{
		display: flex;
	}
	.nav{
		box-sizing: border-box;
		padding:0 24px/@devicePixelRatio;
		width: 160px/@devicePixelRatio;
		background:#f3f5f7;
		.nav-item{
			display: flex;
			align-items:center;
			@h:108px/@devicePixelRatio;
			height:@h;
			font-size: 24px/@devicePixelRatio;
			color: rgb(240,20,20);
			font-weight: 200/@devicePixelRatio;
			span{
				line-height:28px/@devicePixelRatio;
			}
		}
	}
	.list{
		flex:1;
		.title{
			@h:52px/@devicePixelRatio;
			.font-grey(24px);
			box-sizing: border-box;
			padding-left: 24px/@devicePixelRatio;
			height: @h;
			line-height: @h;
			border-left: 4px/@devicePixelRatio solid #d6dde1;
			background: #f3f5f7;
		}
		.wrap-item{
			margin: 0 36px/@devicePixelRatio;
		}
		.list-item{
			display: flex;
			margin: 36px/@devicePixelRatio 0;
		}
	}
	.item-detail{
		flex:1;
		.name{
			padding-top:4px/@devicePixelRatio;
			font-size: 28px/@devicePixelRatio;;
			color: rgb(7, 17, 27);
		}
		.type{
			margin: 16px/@devicePixelRatio 0;
			.font-grey();
		}
		.description{
			margin: 16px/@devicePixelRatio 0;
			.font-grey();
			span{
				margin-right: 24px/@devicePixelRatio;
			}
		}
		.price{
			margin: 16px/@devicePixelRatio 0;
			p{
				display: inline-block;
			}
			.price-now{
				font-size: 28px/@devicePixelRatio;
				font-weight: 700/@devicePixelRatio;
				color: rgb(240, 20, 20);
			}
			.price-once{
				.font-grey();
				text-decoration: line-through;
			}
		}
		.wrap-num{
			float: right;
			display: flex;
			a{
				font-size: 48px/@devicePixelRatio;
				color:rgb(0,160,220);
				line-height: 48px/@devicePixelRatio;
			}
			.num{
				.font-grey();
				display: inline-block;
				margin: 0 48px/@devicePixelRatio;
				line-height: 48px/@devicePixelRatio;
			}
		}
	}
	.wrap-avatar{
		margin-right: 20px/@devicePixelRatio;
		img{
			@siz:116px/@devicePixelRatio;
			height: @siz;
			width: @siz;
		}
	}
</style>