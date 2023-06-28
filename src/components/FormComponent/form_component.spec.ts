import { mount } from "@vue/test-utils";
import FormComponent from "./component.vue";

describe("FormComponent", () => {
    it("should display the form UI", () => {
        const wrapper = mount(FormComponent);
        expect(wrapper.find('[data-test="search_form_input"]')).toBeTruthy();
        expect(wrapper.find('[data-test="search_form_submit_btn"]')).toBeTruthy();
    });
});
