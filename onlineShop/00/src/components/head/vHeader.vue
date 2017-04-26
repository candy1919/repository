<template>
	<div class="header-bg">
		<div class="sellsInf">
			<div class="avatar-wrap">
				<img class="avatar" src="../../assets/logo.png">
			</div>
			<div class="shop-detail">
				<p><span class="icon-band"></span><span class="name">周周周</span></p>
				<p class="send-time"><span>转送</span>/<span>38分钟送达</span></p>
				<div class="discount-wrap">
					<span class="icon-discount"></span>
					<span class="discount-detail">在线支付满在线支付满</span>
					<span class="discount-num">5个 ></span>
				</div>
			</div>
		</div>
		<div class="bulletin">
			<span class="icon-bulletin"></span><p class="bulletin-detail">粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥粥</p><span class="btn-go">></span>
		</div>
	</div>	
</template>
<script>
	
</script>
<style lang="less" scoped>
.icon(@w:15px,@h:15px){ 
    display: inline-block; 
    width: @w;
	height: @h; 
    white-space:nowrap; 
    letter-spacing: -1em; 
    text-indent: -99em; 
    color: transparent;
    background-size: 100%
}
.icon:before {
    /* 伪元素插入空格文本 */
    content: '\3000'; 
}
// .icon(@w:15px,@h:15px){
// 	display: inline-block;
// 	width: @w;
// 	height: @h;
// 	background-size: 100%;
// }
.detail{
	overflow: hidden;
	white-space: nowrap;
	text-overflow:ellipsis;
}
.header-bg{
	position: relative;
	background:url('../../assets/header/header-bg1.jpg') ;
	background-size:100% 100%;
}
.sellsInf{
	display: flex;
	padding:15px 15px 10px;
}
.avatar-wrap{
	margin-right: 15px;
	.avatar{
		@siz:50px;
		width: @siz;
		height: @siz;
		border-radius: 3px;
	}
}
.padding1{
	padding: 5px 10px;
}
.shop-detail{
	flex:1;
	color:white;
	p{
		margin:5px;
	}
	.name{
		font-weight: bold;
		font-size: 18px;
	}
	.discount-detail{
		.detail;
		.padding1;
		flex:1;
		font-size: 12px;
	}
	.discount-wrap{
		display: flex;
	}
	.discount-num{
		.padding1;
		background-color: #000;
		border-radius:20px;
		font-size: 12px;
	}
	.send-time{
		font-size: 13px;
	}
	
}
.bulletin{
	display: flex;
	padding: 5px 10px;
	background: rgba(0,0, 0, 0.8);
	.bulletin-detail{
		.detail;
		flex:1;
		font-size: 12px;
		color: white;
	}
	.btn-go{
		width: 35px;
	}
}
.icon-discount{
	.icon;
	margin: 5px 0 5px;
	vertical-align: middle;
	background-image:url('../../assets/header/decrease_1@2x.png');
}
.icon-band{
	.icon(30px,15px);
	margin-right: 5px;
	background-image:url('../../assets/header/brand@2x.png');
}
.icon-bulletin{
	.icon(30px,15px);
	margin-right: 5px;
	background-image:url('../../assets/header/bulletin@2x.png')
}
</style>