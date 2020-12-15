<template>
	<view class="my-home">
		<view class="header">
			<view class="header-top">
				<image class="set-img top-img" src="../../static/img/ic_me_setting.png" mode=""></image>
				<image class="message-img top-img" src="../../static/img/ic_me_consule.png" mode=""></image>
			</view>
			<image class="my-bg" src="../../static/img/bg_me.png" mode=""></image>
			<view class="my-bottom">
				<view class="avatar">
					<u-avatar :size="150" :src="src"></u-avatar>
					<text class="user-name">{{ text }}</text>
					<view class="activity">
						<image class="active-img" src="../../static/img/ic_hot.png" mode=""></image>
						<text>活跃值：</text>
						<text>11111</text>
					</view>
				</view>
				<u-cell-group>
					<u-cell-item icon="file-text" title="全部订单"></u-cell-item>
				</u-cell-group>
				<view class="menu">
					<view class="menu-item" v-for="item in menu" :key="item.text">
						<image class="menu-img" :src="item.img" mode=""></image>
						<text class="menu-text">{{ item.text }}</text>
					</view>
				</view>
				<view class="menu-list">
					<u-grid :col="4">
						<u-grid-item v-for="item in menuList" :key="item.text">
							<image class="grid-img" :src="item.img" mode=""></image>
							<view class="grid-text">{{ item.text }}</view>
						</u-grid-item>
					</u-grid>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				text: '奔跑的野马',
				menu: [{
						text: '待付款',
						img: require('../../static/img/ic_mea.png')
					},
					{
						text: '待发货',
						img: require('../../static/img/ic_meb.png')
					},
					{
						text: '待收货',
						img: require('../../static/img/ic_mec.png')
					},
					{
						text: '退款',
						img: require('../../static/img/ic_med.png')
					}
				],
				menuList: [{
						text: '我的钱包',
						img: require('../../static/img/mea.png')
					},
					{
						text: '我的卡券',
						img: require('../../static/img/meb.png')
					},
					{
						text: '我的收藏',
						img: require('../../static/img/mec.png')
					},
					{
						text: '帮助中心',
						img: require('../../static/img/med.png')
					},
					{
						text: '意见反馈',
						img: require('../../static/img/mef.png')
					}
				]
			};
		}
	}
</script>

<style scoped lang="scss">
	uni-page-body {
		height: 100%;
	}

	.my-home {
		height: 100%;
		background-color: #f7f8f8;
	}

	.header {
		height: 380rpx;
		position: relative;

		.header-top {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			height: 70rpx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			padding: 0 20rpx;
			box-sizing: border-box;

			.top-img {
				width: 40rpx;
				height: 40rpx;
			}
		}

		.my-bg {
			width: 100%;
			height: 100%;
		}

		.my-bottom {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 300rpx;

			.avatar {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;

				.user-name {
					margin: 20rpx 0 10rpx;
				}

				.activity {
					color: #d09f73;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 10rpx;

					.active-img {
						width: 25rpx;
						height: 25rpx;
						margin-right: 10rpx;
					}
				}
			}

			.menu {
				display: flex;
				background-color: #FFFFFF;
				margin-bottom: 10rpx;

				.menu-item {
					flex: 1;
					height: 165rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					padding: 20rpx 0;

					.menu-img {
						width: 50rpx;
						height: 50rpx;
					}

					.menu-text {
						color: #aaa;
					}
				}
			}
			
			.menu-list{
				.grid-img{
					width: 60rpx;
					height: 60rpx;
					margin-bottom: 20rpx;
				}
			}
		}
	}
</style>
