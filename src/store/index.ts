import Vue from "vue";
import Vuex from "vuex";
import {
	StoreInterface,
	StateKeys
} from './types';

Vue.use(Vuex);

const storeObject: StoreInterface = {
    state: {
		[StateKeys.weather_info]: {
			data: null,
			error: ''
		}
	},
    getters: {
		getStateData: (state: any) => (key: string) => state[key]
	},
    mutations: {
		setStateData(state: any, data: any) {
			Object.keys(data).forEach((stateKey) => {
				state[stateKey] = data[stateKey];
			});
		}
	},
    actions: {
		async injectStateData({ commit }: any, data: any) {
			commit('setStateData', data);
		}
	},
};

export default new Vuex.Store(storeObject);
