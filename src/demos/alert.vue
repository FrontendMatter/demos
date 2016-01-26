<template>
	<!-- Content -->
	<div class="container-fluid">
		<br>
		<alert-notification :fixed.sync="props.fixed" :timeout.sync="props.timeout" :timeout-delay="props.timeoutDelay"></alert-notification>
		<p v-for="button in buttons">
			<button class="btn" :class="btnClass(button)" @click="triggerAlert(button)" >Trigger {{ button }}</button>	
		</p>

		<dropdown-settings>
			<alert-settings :model.sync="props"></alert-settings>
		</dropdown-settings>
	</div>
</template>
<script>

	import { AlertNotification } from 'themekit-vue'
	const { DropdownSettings, AlertSettings } = window.Util

	export default {
		mixins: [AlertNotification],
		data () {
			return {
				buttons: [
					'success',
					'error',
					'info',
					'warning',
					'default'
				],
				props: {}

			}
		},
		methods: {
			btnClass (type) {
				var button = {
					'btn-danger': type === 'error' 
				}
				button['btn-' + type] = true

				return button
			},
			triggerAlert (type) {
				if (type === 'default') type = null
				this.alertNotification(this.props.message, type)
			}
		},
		components: {
			AlertNotification,
			DropdownSettings,
			AlertSettings
		}
	}
</script>