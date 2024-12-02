<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	body{
		background-color: #eee;
	}
	.status-bar{
		height: var(--status-bar-height);
	}
	.flex-centered{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.flex-column-centered{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.flex{
		display: flex;
	}
	.flex-column{
		display: flex;
		flex-direction: column;
	}
</style>
