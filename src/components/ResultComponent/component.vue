<template>
	<div
		data-test="weather_info"
		class="weather_info"
	>
		<template v-if="weatherError">
			<div
				data-test="error_block"
				class="error_block"
			>{{weatherError}}</div>
		</template>
		<template v-else>
			<div
				data-test="weather_info_headline"
				class="weather_info_headline"
				v-if="weatherInfo.sys && weatherInfo.name"
			>
				<p class="weather_info_headline__line bold">{{ weatherInfo.name }}{{ weatherInfo.sys.country ? `, ${weatherInfo.sys.country}` : '' }}</p>
				<p
					v-if="weatherInfo.sys.sunrise"
					class="weather_info_headline__line"
				>Sunrise: {{timestampToDate(weatherInfo.sys.sunrise)}}</p>
				<p
					v-if="weatherInfo.sys.sunset"
					class="weather_info_headline__line"
				>Sunset: {{timestampToDate(weatherInfo.sys.sunset)}}</p>
			</div>
			<div
				data-test="weather_info_body"
				class="weather_info_body"
			>
				<div
					class="weather_info_body__block"
					v-if="weatherInfo.main"
				>
					<p class="weather_info_body__block__head">Main Info</p>
					<ul class="weather_info_body__block__list">
						<li class="weather_info_body__block__list__item">Feels like: {{weatherInfo.main.feels_like}}</li>
						<li class="weather_info_body__block__list__item">Humidity: {{weatherInfo.main.humidity}}</li>
						<li class="weather_info_body__block__list__item">Pressure: {{weatherInfo.main.pressure}}</li>
						<li class="weather_info_body__block__list__item">Temp: {{weatherInfo.main.temp}}</li>
						<li class="weather_info_body__block__list__item">Max temp: {{weatherInfo.main.temp_max}}</li>
						<li class="weather_info_body__block__list__item">Min temp: {{weatherInfo.main.temp_min}}</li>
					</ul>
				</div>
				<div
					class="weather_info_body__block"
					v-if="weatherInfo.weather"
				>
					<p class="weather_info_body__block__head">Weather Info</p>
					<ul class="weather_info_body__block__list">
						<li
							v-for="(w, index) in weatherInfo.weather"
							:key="index"
							class="weather_info_body__block__list__item"
						>
							{{w.main}}, {{w.description}}
						</li>
					</ul>
				</div>
				<div
					class="weather_info_body__block"
					v-if="weatherInfo.wind"
				>
					<p class="weather_info_body__block__head">Wind Info</p>
					<ul class="weather_info_body__block__list">
						<li class="weather_info_body__block__list__item">Degree: {{ weatherInfo.wind.deg }}</li>
						<li class="weather_info_body__block__list__item">Speed: {{ weatherInfo.wind.speed }}</li>
					</ul>
				</div>
			</div>
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { timestampToDate } from "@/utils/commonUtils"; 
import { StateKeys } from '@/store/types';

export default defineComponent({
	name: "ResultComponent",
	setup(props) {
		return {
			...props,
		};
	},
	computed: {
		weatherInfo() {
			return this.$store.getters.getStateData(StateKeys.weather_info).data;
		},
		weatherError() {
			return this.$store.getters.getStateData(StateKeys.weather_info).error;
		}
	},
	methods: {
		timestampToDate(timestamp: number) {
			return timestampToDate(timestamp);
		}
	}
});
</script>

<style lang="scss" rel="stylesheet">
	@import "./results_component";
</style>
