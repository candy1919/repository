<template>
	<div class="bg-header">
		<div class="bg1"></div>
		<div class="bg2">
		<div class="inf-seller">
			<div class="wrap-avatar"><img src="../../assets/upload/seller/header-bg.jpg"></div>
			<div class="content-area">
				<div class="wrap-name">
					<i class="i-brand"></i>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="inf-detach">
					<span class="detach">{{seller.description}}</span>/
					<span class="time">{{seller.deliveryTime}}分钟送达</span>
				</div>
				<div class="wrap-discount">
					<div class="pay" v-if="seller.supports">
						<i :class="iconMap[seller.supports[0].type]"></i>
						<p class="content">{{seller.supports[0].description}}</p>
					</div>
					<a class="num-discount"><span class="num">5</span>个<i class="icon-keyboard_arrow_right"></i></a>
				</div>
			</div>
		</div>
		<div class="wrap-bulletin">
			<i class="i-bulletin"></i>
			<p class="content">{{seller.bulletin}}</p>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		</div>
		<div class="detail ">
			<div class="detail-wrap clearfix">
				<div class="content">
					
				</div>
			</div>
			<div class="close">
				<i class="icon-close"></i>
			</div>
		</div>
		
			
		</div>
	</div>		
</template>
<script>
import {dataAjax} from '@/ajax.js'
	export default{
		props:['seller'],
		data(){
			return{
				iconMap:['i-decrease','i-discount','i-special','i-invoice','i-guarantee']
			}
			
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
.i{
	vertical-align: bottom;
	display: inline-block;
	background-size: 100%;
}
.bg-header{
	position: relative;
	.bg1{
		position:absolute;
		top:0;
		left:0;
		bottom:10px/@devicePixelRatio;
		right:0;
		background:url("../../assets/upload/seller/header-bg.jpg");
   		filter: blur(10px/@devicePixelRatio);
	}
	.bg2{
		position:relative;
		background: rgba(7, 17,27,0.5);
	}
	.inf-seller{
		display: flex;
		@w1:48px/@devicePixelRatio;
		@w2:24px/@devicePixelRatio;
		@w3:36px/@devicePixelRatio;
		padding: @w1 @w1 @w2 @w3
	}
	.detail{
		position: fixed;
		background: rgba(7, 17, 27, 0.8);
		top:0;
		left:0;
		width: 100%;
		height: 100%;
		overflow: auto;
		z-index: 100;
		color: #fff;
		.detail-wrap{
			min-height: 100%;
		}
		.content{
			margin-top: 64px;
			padding-bottom: 64px;
		}
		.close{
			position: relative;
			margin: -64px auto 0 auto;
			width: 32px;
			height: 32px;
			clear: both;
			font-size: 32px;
		}
	}
}
.inf-seller{
	.wrap-avatar{
		display: inline-block;
		margin-right: 32px/@devicePixelRatio;
	} img{
		@siz:128px/@devicePixelRatio;
		width:@siz;
		height:@siz;
		border-radius: 4px/@devicePixelRatio;
	}
	.content-area{
		flex:1;
		padding: 4px/@devicePixelRatio 0;
	}
}
.wrap-name{
	.i-brand{
		.i;
		width: 60px/@devicePixelRatio;
		height: 36px/@devicePixelRatio;
		margin-right: 12px/@devicePixelRatio;
		background-image: url('../../assets/header/brand@2x.png');
	}
	.name{
		display: inline-block;
		font-size: 32px/@devicePixelRatio;
		color: rgb(255,255,255);
		font-weight: bold;
		line-height: 36px/@devicePixelRatio;
	}
}
.inf-detach{
	margin: 16px/@devicePixelRatio 0 6px/@devicePixelRatio 0;
	font-size: 24px/@devicePixelRatio;
	color: rgb(255, 255, 255);
	font-weight: 200px/@devicePixelRatio;
	line-height: 24px/@devicePixelRatio;
}
.wrap-discount{
	overflow: hidden;
	font-size: 20px/@devicePixelRatio;
	color: rgb(255, 255, 255);
	font-weight: 200/@devicePixelRatio;
	line-height: 24px/@devicePixelRatio;
	.pay{
		display: inline-block;
		padding: 14px/@devicePixelRatio 0; 
	}
	.i-decrease{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/decrease_1@2x.png');
	}
	.i-discount{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/discount_1@2x.png');
	}
	.i-special{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/special_1@2x.png');
	}
	.i-invoice{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/invoice_1@2x.png');
	}
	.i-guarantee{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/guarantee_1@2x.png');
	}
	.content{
		display: inline-block;
	}
	.num-discount{
		@w1:14px/@devicePixelRatio;
		@w2:16px/@devicePixelRatio;
		float:right;
		padding: @w1 @w2;
		border-radius: @w2;
		background-color:rgba(0, 0, 0, 0.2);
		i{
			margin-left: 4px/@devicePixelRatio;
		}
	}
}
.wrap-bulletin{
	display: flex;
	align-items:center;
	box-sizing: border-box;
	padding:  0 24px/@devicePixelRatio;
	height: 58px/@devicePixelRatio;
	font-size: 20px/@devicePixelRatio;
	color: rgb(255, 255, 255);
	background-color: rgba(7,17, 27, 0.2);

	.i-bulletin{
		.i;
		width: 44px/@devicePixelRatio;
		height: 24px/@devicePixelRatio;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/bulletin@2x.png');
	}
	.content{
		flex:1;
		margin-right: 8px/@devicePixelRatio;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}

}
</style>