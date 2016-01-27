<template>
	<div class="container-fluid">
		<br>
		<div class="panel panel-default">
			<div class="panel-body">
				<tab-settings :model.sync="props"></tab-settings>	
			</div>
		</div>
			
		

		<tabs responsive="xs" class="tabs-primary" 
			:vertical.sync="props.vertical" 
			:align.sync="props.align" 
			:stacked.sync="props.stacked"
			>
			<tab-pane :label="tab.label" :active="tab.active" v-for="tab in tabs" :icon="tab.icon">
				{{ tab.content }}
			</tab-pane>
		</tabs>		
	</div>
</template>
<script>
	import { Tabs } from 'themekit-vue'
	import { TabPane } from 'themekit-vue'
	const { DropdownSettings, TabSettings } = window.Util

	export default {
		data () {
			return {
				tabs: [
					{
						active:	true,
						label:	' Home',
						icon: 'fa fa-home',
						content: `
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente illum incidunt recusandae soluta molestiae, dolor cupiditate laudantium? Qui, tempore, voluptate!
						`
					},
					{
						label:	' About',
						icon: 'fa fa-user',
						content: `
							Sapiente illum incidunt recusandae soluta molestiae, dolor cupiditate laudantium? Qui, tempore, voluptate!
						`
					}
				],
				props: {}
			}
		},
		components: {
			Tabs,
			TabPane,
			DropdownSettings,
			TabSettings
		}
	}
</script>