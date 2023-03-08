export default {
  template: `
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black p-2">
            <input v-model="newAssignment" placeholder="New assignment..." class="" />
            <button type="submit" class="bg-white text-black border-l">Add</button>
          </div>
        </form>
  `,


  data() {
    return {
      newAssignment:''
    }
  },

  methods: {
        add() {
          this.$emit('add', this.newAssignment);


          this.newAssignment = '';
        }
  }
}
