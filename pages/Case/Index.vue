<template>
	<view>
		<view class="flex">
			<view class="item content-box" v-for="(item,index) in list" :key="index">
				<view class="img-box">
					<image :src="item.imgUrl" mode="aspectFill"></image>
				</view>
				<view class="title">
					{{item.title}}
				</view>
				<view class="desciption">
					{{item.description}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						imgUrl:"../../static/logo.png",
						title:"恋爱，始于聊天",
						description:"聊天技巧"
					},
					{
						imgUrl:"../../static/logo.png",
						title:"恋爱，始于聊天",
						description:"聊天技巧"
					},
					{
						imgUrl:"../../static/logo.png",
						title:"恋爱，始于聊天",
						description:"聊天技巧"
					},
					{
						imgUrl:"../../static/logo.png",
						title:"恋爱，始于聊天",
						description:"聊天技巧"
					}
				]
			};
		}
	}
</script>

<style lang="scss">
	.content-box{
		margin: 20rpx;
		background-color: #fff;
		border-radius: 40rpx;
		box-shadow: 2px 2px 5px 1px rgba(200, 200,200, 0.5);
	}
	.flex{
		display: flex;
		flex-wrap: wrap;
		width: 90vw;
		margin: 0 auto;
		justify-content: space-between;
	}
	.item{
		width: 44%;
		height: 350rpx;
		.img-box{
			width: 100%;
			height: 180rpx;
			border-radius: 40rpx 40rpx 0 0;
			image{
				width: 100%;
				height: 100%;
				border-radius: 40rpx 40rpx 0 0;
			}
		}
		.title{
			padding: 20rpx;
			font-size: 25rpx;
			font-weight: bold;
		}
		.desciption{
			margin-top: auto;
			padding: 0 20rpx;
			font-size: 18rpx;
			color: #666;
		}
	}
</style>
