import { reqCategoryList } from "@/api";

const state = {
	categoryList: [],
};
const mutations = {
	CATEGORYLIST(state, categoryList) {
		state.categoryList = categoryList;
	},
};
const actions = {
	async categoryList({commit}) {
		let results = await reqCategoryList();
		if (results.code == 200) {
      // console.log(results);
			commit("CATEGORYLIST", results.data);
		}
	},
};
const getters = {};
export default {
	state,
	mutations,
	actions,
	getters,
};
