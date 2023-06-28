<template>
	<div class="layout">
		<div class="layout__left">
			<FormComponent />
		</div>
		<div class="layout__right">
			<ResultComponent />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
	name: "LayoutContainer",
	components: {
		FormComponent: () => import("@/components/FormComponent/component.vue"),
		ResultComponent: () => import("@/components/ResultComponent/component.vue"),
	},
});
</script>

<style lang="scss" rel="stylesheet">
	@import "./layout";
</style>
