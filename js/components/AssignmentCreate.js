export default {
  template:
    /*html*/
    `
    <form @submit.prevent="add">
        <input v-model="newAssignment" type="text" placeholder="New Assignment..." class="text-black p-1"/>
        <button type="submit" class="ml-5 text-black bg-gray-200 p-1">Add</button>
      </form>
    `,
  data() {
    return {
      newAssignment: "",
    };
  },
  methods: {
    add() {
      // emit to the parent
      // The parent listens for custom 'add'
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
