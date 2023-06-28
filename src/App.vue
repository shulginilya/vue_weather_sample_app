<template>
	<div id="app">
		<LayoutContainer />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import LayoutContainer from "@/containers/LayoutContainer/component.vue";

export default defineComponent({
	name: "App",
	components: {
		LayoutContainer,
	},
});
</script>

<style lang="scss" rel="stylesheet">
	@import "@/assets/sass/themes/moonlight/theme";
</style>
