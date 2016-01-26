<template>
	<div class="row">
		<div class="col-md-3">
			<label>Fixed:</label>
			<div class="checkbox">
				<label for="alert-fixed">
					<input id="alert-fixed" type="checkbox" v-model="model.fixed" /> Yes
				</label>
			</div>
		</div>
		<div class="col-md-3">
			<div class="form-group">
				<label>Timeout:</label>	
				<div class="checkbox">
					<label for="alert-timeout">
						<input type="checkbox" id="alert-timeout" v-model="model.timeout" /> Yes
					</label>
				</div>
			</div>
			<div class="form-group" v-if="model.timeout">	
				<input type="text" v-model="model.timeoutDelay">
			</div>
			
		</div>

		<div class="col-md-3">
			<label for="alert-message">Message:</label>	
			<input class="form-control" id="alert-message" v-model="model.message" />				
		</div>

	</div>
</template>

<script>
	import merge from 'mout/object/merge'

	export default {
		data () {
			return {
				settings: {
					fixed: true,
					message: 'Lorem ipsum.',
					timeout: true,
					timeoutDelay: 5000
				}
			}
		},
		props: {
			model: {
				type: Object
			}
		},
		created () {
			if (this.model) {
				this.model = merge(this.settings, this.model)
			}
		}
	}
</script>