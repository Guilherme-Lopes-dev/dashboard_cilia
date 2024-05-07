import mutations from "./mutations";

const state = () => ({
    data: [],
    loading: false,
    error: null,
  });

  const actions = {

  }

  export default {
    namespaced: false,
    state,
    actions,
    mutations,
  };
  