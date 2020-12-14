<template>
	<view class="content">
		<view class="goods-list">
			<view class="goods-item" v-for="item in 6" :key="item">
				<view class="left">
					<radio value="1" />
				</view>
				<view class="center">
					<image class="img" src="../../static/img/add/add2.png" mode=""></image>
				</view>
				<view class="right">
					<view class="r-top msg">
						商品名称
					</view>
					<view class="r-center msg">
						<text>红色 </text>
						<text> M号</text>
					</view>
					<view class="r-bottom msg">
						<text>￥200</text>
						<view class="add-count">
							<view class="add-left add-btn">
								-
							</view>
							<view class="add-center">
								1
							</view>
							<view class="add-right add-btn">
								+
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="left">
				<label class="radio">
					<radio value="1" />
					<text class="select-title">全选</text>
					<text class="goods-money">￥200</text>
				</label>
			</view>
			<view class="right">
				去结算
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;
	}

	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f7f8f8;
		overflow-y: auto;
	}

	.goods-list {
		flex: 1;
		overflow-y: auto;

		.goods-item {
			padding: 20rpx;
			box-sizing: border-box;
			display: flex;
			background-color: #FFFFFF;

			.left {
				width: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			.center {
				width: 230rpx;

				.img {
					width: 180rpx;
					height: 180rpx;
				}
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;

				.msg {
					flex: 1;
					display: flex;
					align-items: center;
				}

				.r-top {
					font-size: 34rpx;

				}

				.r-center {
					color: #C0C4CC;
				}

				.r-bottom {
					display: flex;
					justify-content: space-between;

					.add-count {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						font-size: 30rpx;

						.add-btn {
							width: 50rpx;
							height: 50rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							background-color: #f7f8f8;
						}

						.add-left {
							border-right: 1px solid #ffffff;
						}

						.add-right {
							border-left: 1px solid #ffffff;
						}

						.add-center {
							width: 80rpx;
							height: 50rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							background-color: #f7f8f8;
						}
					}
				}
			}
		}
	}

	.footer {
		height: 80rpx;
		background-color: #FFFFFF;
		display: flex;
		border-top: 1px solid #F5F5F5;

		.left {
			flex: 1;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			padding-left: 20rpx;

			.select-title {
				margin: 0 10rpx;
			}

			.goods-money {
				color: #ff3976;
			}
		}

		.right {
			width: 200rpx;
			background-color: #ff3976;
			color: #FFFFFF;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 38rpx;
		}
	}
</style>
