<template>
	<div class="bg-header">
		<div class="bg1"></div>
		<div class="bg2">
		<div class="inf-seller">
			<div class="wrap-avatar"><img src="../../assets/upload/seller/header-bg.jpg"></div>
			<div class="content-area">
				<div class="wrap-name">
					<i class="i-brand"></i>
					<span class="name">{{this.seller.name}}</span>
				</div>
				<div class="inf-detach">
					<span class="detach">{{this.seller.description}}</span>/
					<span class="time">{{this.seller.deliveryTime}}分钟送达</span>
				</div>
				<div class="wrap-discount">
					<div class="pay">
						<i class="i-discount"></i>
						<p class="content">在线支付</p>
					</div>
					<a class="num-discount"><span class="num">5</span>个<i class="icon-keyboard_arrow_right"></i></a>
				</div>
			</div>
		</div>
		<div class="wrap-bulletin">
			<i class="i-bulletin"></i>
			<p class="content">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		</div>
	</div>		
</template>
<script>
import {dataAjax} from '@/ajax.js'
	export default{
		data(){
			return {
				seller:{}
			}
		},
		created(){
			// GET /someUrl
		  this.$http.get('/api/seller').then(response => {

		    // get body data
		    this.someData = response.body;
		    if(this.someData.errno==0){
		    	this.seller=this.someData.data;
		    }
		  }, response => {
		    // error callback
		  });
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
	.i-discount{
		.i;
		@siz:24px/@devicePixelRatio;
		width: @siz;
		height: @siz;
		margin-right: 8px/@devicePixelRatio;
		background-image: url('../../assets/header/decrease_1@2x.png');
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