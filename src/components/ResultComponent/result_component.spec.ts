import { mount } from "@vue/test-utils";
import ResultComponent from "./component.vue";

describe("ResultComponent", () => {
    it("results holder container should exists", () => {
        const wrapper = mount(ResultComponent, {
            computed: {
                weatherInfo() {
                    return {};
                },
                weatherError() {
                    return '';
                }
            }
        });
        expect(wrapper.find('[data-test="weather_info"]')).toBeTruthy();
    });
});
