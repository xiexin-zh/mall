<template>
	<view class="search">
		<view class="input-box">
			<input class="search-input" type="text" placeholder="搜索商品" value="" />
		</view>
		<view class="icon-box">
			<image class="message" src="../static/img/ic_me_consule.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.search {
		display: flex;
		height: 100%;
		padding: 0 25rpx;
		box-sizing: border-box;

		.input-box {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			overflow: hidden;
			justify-content: flex-start;
			padding-left: 20rpx;
			box-sizing: border-box;

			.search-input {
				width: 90%;
				height: 70%;
				padding: 0 25rpx;
				box-sizing: border-box;
				border-radius: 20px;
				display: block;
				background-color: #f7f8f8;
			}
		}

		.icon-box {
			width: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;

			.message {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
</style>
