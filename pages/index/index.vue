<template>
	<view class="content">
		<view class="header-search">
			<Search />
		</view>
		<view class="swiper-box">
			<Swiper />
		</view>
		<view class="today-market">
			<view class="market-top">
				<view class="left-title">
					今日市场
				</view>
				<view class="right-buy-message">
					<text>长沙</text>
					<text>老**刚刚下了一单</text>
				</view>
			</view>
			<view class="market-bottom">
				<view v-for="item in 2" :key="item" class="class-item">
					<image class="img" src="../../static/img/add/add1.png" mode=""></image>
					<view class="class-count">
						1622款
					</view>
					<view class="class-address">
						十三行1-3楼
					</view>
					<view class="class-type">
						跑量中低档
					</view>
				</view>
			</view>
		</view>
		<view class="hot">
			<view class="hot-left">
				<image class="img" src="../../static/img/add/add5.png" mode=""></image>
			</view>
			<view class="hot-right">
				<view class="top-img img-box">
					<image class="img" src="../../static/img/add/add1.jpg" mode=""></image>
				</view>
				<view class="bottom-img img-box">
					<image class="img" src="../../static/img/add/add2.jpg" mode=""></image>
				</view>
			</view>
		</view>
		<view class="city-goods">
			<view class="tab-city">
				<u-tabs :list="list" :is-scroll="true" :current="current" :bar-width="50" :gutter="50" active-color="#ff3976"
				 @change="change"></u-tabs>
			</view>
			<view class="goods-box" v-for="item in 2" :key="item">
				<view class="banner">
					<image class="img" src="../../static/img/add/ina.jpg" mode=""></image>
				</view>
				<view class="goods-item">
					<view class="item" v-for="item in 3" :key="item">
						<image class="img" src="../../static/img/add/inb.jpg" mode=""></image>
						<view class="text">
							￥200
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Search from '../../components/search.vue'
	import Swiper from '../../components/swiper.vue'
	export default {
		components: {
			Search,
			Swiper
		},
		data() {
			return {
				list: [{
					name: '全部货'
				}, {
					name: '北京货'
				}, {
					name: '上海货'
				}, {
					name: '深圳货'
				}, {
					name: '武汉货'
				}, {
					name: '杭州货'
				}],
				current: 0
			}
		},
		onLoad() {

		},
		methods: {
			change(current) {
				this.current = current
			}
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #f7f8f8;

		.header-search {
			height: 100rpx;
			background-color: #FFFFFF;
		}

		.today-market {
			padding: 10rpx 20rpx 30rpx;
			background-color: #FFFFFF;

			.market-top {
				padding: 20rpx 0;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.left-title {
					font-size: 32rpx;
				}

				.right-buy-message {
					color: #808080;
					font-size: 28rpx;
				}
			}

			.market-bottom {
				display: flex;
				justify-content: space-between;

				.class-item {
					width: 48%;
					height: 200rpx;
					border-radius: 10rpx;
					overflow: hidden;
					position: relative;

					.img {
						height: 100%;
						width: 100%;
					}

					.class-count {
						position: absolute;
						top: 10rpx;
						right: 10rpx;
						z-index: 2;
						color: #888;
						background-color: #ebebe9;
						padding: 5rpx 10rpx;
						border-top-left-radius: 20rpx;
						border-top-right-radius: 20rpx;
						border-bottom-left-radius: 20rpx;
					}

					.class-address,
					.class-type {
						position: absolute;
						bottom: 50rpx;
						left: 0;
						z-index: 2;
						width: 100%;
						color: #fff;
						text-align: center;
						font-size: 38rpx;
						font-weight: 500;
					}

					.class-type {
						bottom: 18rpx;
						font-size: 28rpx;
						font-weight: 600;
					}
				}
			}
		}

		.hot {
			margin-top: 20rpx;
			background-color: #FFFFFF;
			height: 300rpx;
			box-sizing: border-box;
			display: flex;

			.hot-left {
				flex: 1;
				display: flex;
				align-items: center;
				padding: 30rpx 0;

				.img {
					width: 100%;
					height: 250rpx;
				}
			}

			.hot-right {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 10rpx;
				box-sizing: border-box;

				.img-box {
					flex: 1;
					padding: 5rpx;
					box-sizing: border-box;

					.img {
						width: 100%;
						height: 100%;
					}
				}

				.top-img {
					border-bottom: 1px solid #F1F1F1;
				}
			}
		}

		.city-goods {
			margin-top: 20rpx;

			.tab-city {
				// height: 100rpx;
			}
		}

		.goods-box {
			background-color: #FFFFFF;
			padding: 20rpx;
			margin-bottom: 20rpx;
			box-sizing: border-box;

			.banner {
				.img {
					width: 100%;
				}
			}
		}
		
		.goods-item{
			display: flex;
			justify-content: space-between;
			padding-top: 10rpx;
			
			.item{
				width: 32%;
				height: 250rpx;
				overflow: hidden;
				
				.img{
					width: 100%;
					height: 200rpx;
					border-radius: 10rpx;
				}
				.text{
					text-align: center;
				}
			}
		}

	}
</style>
