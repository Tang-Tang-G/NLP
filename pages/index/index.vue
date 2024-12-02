<template>
	<div class="app-container">
		<div class="input-container">
			<view @click="copyPaste">点击我，分析对方的情绪</view>
		</div>

		<!-- 主要模块 -->
		<div class="main-modules">
			<div class="module" v-for="module in mainModules" :key="module.name">
				<div class="module-header">
					<img :src="module.icon" :alt="module.name" />
					<h3>{{ module.name }}</h3>
				</div>
				<p>{{ module.description }}</p>
			</div>
		</div>

		<!-- 学院 -->
		<div class="colleges">
			<div class="college" v-for="college in colleges" :key="college.name">
				<h3>{{ college.name }}</h3>
				<div class="sections">
					<span v-for="section in college.sections" :key="section">{{ section }}</span>
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
			icon: 'static/logo.png',
			description: '愿世间没有舔狗'
		},
		{
			name: '土味情话',
			icon: 'static/logo.png',
			description: '模拟真人聊天'
		},
	]);

	const colleges = ref([{
			name: '爱情学院',
			sections: ['暗恋', '聊天搭讪', '社交撩妹']
		},
		{
			name: '单身学院',
			sections: ['吸引异性', '约会', '表白']
		},
		// ...其他学院
	]);

	const copyPaste = () => {
		// 实现复制粘贴的逻辑
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
		flex-wrap: wrap;
		gap: 16px;
		margin-bottom: 16px;
	}

	.module {
		background-color: white;
		padding: 16px;
		border-radius: 8px;
		width: calc(50% - 8px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.module-header {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 8px;
	}

	.module-header img {
		width: 24px;
		height: 24px;
		margin-right: 8px;
	}
	.colleges {
		margin-bottom: 16px;
	}

	.college {
		background-color: white;
		padding: 16px;
		border-radius: 8px;
		margin-bottom: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.college h3 {
		margin-bottom: 8px;
	}

	.sections span {
		display: inline-block;
		background-color: #f1f1f1;
		padding: 4px 8px;
		border-radius: 4px;
		margin-right: 4px;
		margin-bottom: 4px;
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