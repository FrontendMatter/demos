<template>
	<div class="row">
		<div class="col-md-3">
			<label>Vertical:</label>
			<div class="checkbox">
				<label for="tab-vertical">
					<input id="tab-vetical" type="checkbox" v-model="model.vertical"/> Yes
				</label>
			</div>
			<div class="form-group"  v-if="model.vertical">
				<label>Align:</label>	
				<div class="radio">
					<label for="align-left">
						<input type="radio" id="align-left" v-model="model.align" value="left"/> Left
					</label>
				</div>
				
				<div class="radio">
					<label for="align-right">
						<input type="radio" id="align-right" v-model="model.align" value="right"/> Right
					</label>
				</div>

			</div>
		</div>

		<div class="col-md-3">
			<label for="">Stacked</label>
			<div class="checkbox">
				<label for="tab-stacked">
					<input id="tab-stacked" type="checkbox" v-model="model.stacked" /> Yes
				</label>
			</div>
		</div>

	</div>
</template>

<script>
	import merge from 'mout/object/merge'

	export default {
		data () {
			return {
				settings: {
					vertical: false,
					align: 'left',
					stacked: false
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