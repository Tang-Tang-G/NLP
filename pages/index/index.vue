<template>
	<div class="app-container">
		<view class="input-container" @click="copyPaste">
			<view >点击我，分析对方的情绪</view>
		</view>

		<div class="main-modules">
			<div class="module" v-for="module in mainModules" :key="module.name">
				<img :src="module.image" :alt="module.name" class="image_class" />
			</div>
		</div>

		<div class="colleges">
			<h3 style="padding-left: 3% ; color: gray; padding-bottom:5px;">爱情学院</h3>
			<div class="college" v-for="college in colleges" :key="college.name">
				<img :src="college.icon" alt="学院图标" style="margin-right: 10px;" />
				<div class='college-info'>
					<h3>{{ college.name }}</h3>
					<div class="sections">
						<span v-for="section in college.sections" :key="section">{{ section }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	const inputText = ref('');

	const mainModules = ref([{
			name: '舔狗日志',
			image: 'static/Dog.png'
		},
		{
			name: '土味情话',
			image: 'static/Love_Saying.png'
		},
	]);

	const colleges = ref([{
			name: '单身学院',
			sections: ['暗恋', '聊天搭讪', '社交撩妹'],
			icon: 'static/Arrow_Love.png'
		},
		{
			name: '追求学院',
			sections: ['吸引异性', '约会', '表白'],
			icon: 'static/Pursue.png'
		},
		{
			name: '恋爱学院',
			sections: ['了解异性', '分析情绪'],
			icon: 'static/Fall_In_Love.png'
		},
	]);

	const copyPaste = () => {
		uni.navigateTo({
			url: '/pages/ChatInput/ChatInput'
		})
	};
</script>

<style scoped>
	.app-container {
		background-color: #f8f8f8;
		font-family: Arial, sans-serif;
	}

	.input-container {
		margin: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
		background-color: lightgrey;
		border-radius: 16px;
	}

	.input-container view {
		padding: 8px 16px;
		color: white;
		border: none;
		cursor: pointer;
	}

	.main-modules {
		display: flex;
		flex-wrap: nowrap;
		gap: 16px;
		margin-bottom: 16px;
	}

	.module {
		display: flex;
		width: 40%;
		box-sizing: border-box;
		margin-left: 5%;
	}

	.image_class {
		width: auto;
		height: 70px;
		padding: 5px;
		border-radius: 18px;
	}

	.colleges {
		margin-bottom: 16px;
		font-size: 16px;
		font-style: italic;
		font-family: '黑体';
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

	}

	.college {
		align-items: center;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
		background-color: white;
		padding: 16px;
		border-radius: 8px;
		margin-bottom: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.college img {
		width: 50px;
		/* 根据需要调整图片大小 */
		height: 50px;
		margin-right: 10px;
	}

	.college h3 {
		font-family: 'Courier New';
		font-size: 20px;
		margin-bottom: 8px;
	}

	.sections span {
		display: inline-block;
		background-color: #f1f1f1;
		padding: 4px 8px;
		border-radius: 4px;
		margin-right: 4px;
		margin-bottom: 4px;
		font-size: 15px;
		color: #555;
		margin: 5;
	}

	.bottom-nav {
		display: flex;
		justify-content: space-around;
		background-color: white;
		padding: 8px 0;
		border-top: 1px solid #ddd;
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #666;
	}

	.nav-item img {
		width: 24px;
		height: 24px;
		margin-bottom: 4px;
	}
</style>