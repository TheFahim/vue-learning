import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
  state: () => ({

      name: '',
      spots: 0,
      members: []

  }),

  actions: {
    async fill() {
     let data = await import('@/team.json');
        this.$state = data;
    },

    grow(spots) {
      this.spots = spots;
    }
  },

  getters: {
    spotsRemaining(){
      return this.spots - this.members.length;
    }
  }
});
