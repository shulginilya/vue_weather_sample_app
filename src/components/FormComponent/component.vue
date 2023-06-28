<template>
	<div class="query_form">
		<form
			data-test="search_form"
			class="query_form__form"
			@submit.prevent="submitSearchForm"
		>
			<input
				data-test="search_form_input"
				class="query_form__form__input"
				type="text"
				placeholder="Type the city"
				v-model="cityInput"
			/>
			<button
				data-test="search_form_submit_btn"
				class="query_form__form__btn"
			>Search</button>
		</form>
	</div>
</template>

<script lang="ts">
import { commonConfig } from '@/configs/common';
import { makeRequest } from '@/utils/requestUtil';
import { StateKeyValuePairType } from '@/store/types';
import { transformWeatherResponse } from '@/store/helpers';
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
	name: "FormComponent",
	setup(props) {
		return {
			cityInput: '',
			...props
		};
	},
	methods: {
		async submitSearchForm() {
			const resultObject: StateKeyValuePairType = {
				data: null,
				error: 'City must be specified'
			};
			if (this.cityInput) {
				const geoCodeObject = await makeRequest({
					url: `${commonConfig.geoApiEndpoint}/direct?q=${this.cityInput}&appid=${commonConfig.apiKey}`
				});
				if (geoCodeObject.data && geoCodeObject.data.length > 0) {
					const geoCodeData = geoCodeObject.data[0];
					const lat = geoCodeData.lat;
					const lon = geoCodeData.lon;
					const weatherObject = await makeRequest({
						url: `${commonConfig.apiEndpoint}?lat=${lat}&lon=${lon}&appid=${commonConfig.apiKey}`
					});
					if (weatherObject) {
						resultObject.data = transformWeatherResponse(weatherObject.data);
						resultObject.error = '';
					} else {
						resultObject.error = 'No forecasts available';
					}
				} else {
					resultObject.error = 'Geographic place is not found';
				}
			}
			this.$store.dispatch('injectStateData', {
				weather_info: resultObject
			});
		}
	}
});
</script>

<style lang="scss" rel="stylesheet">
	@import "./query_form";
</style>
