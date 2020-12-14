<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item v-for="item in 3" :key="item">
			<view class="swiper-item">
				<image class="swiper-img" src="../static/img/add/add.png" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			};
		}
	}
</script>

<style lang="scss">
	.swiper-item {
		width: 100%;
		height: 100%;

		.swiper-img {
			width: 100%;
			height: 100%;
		}
	}
</style>
