export default {
  template:
    /*html*/
    `
    <div class="flex gap-3">
            <button 
            @click="$emit('update:currentTag', tag)"
            v-for="tag in tags" 
            class="hover:bg-sky-700 border rounded px-1 py-0.5 my-2"
            :class="{
              'bg-green-500 border-black': tag == currentTag
            }"
            >
              {{tag}}
              </button>
          </div>
    `,

  props: {
    initialTags: Array,
    currentTag: String,
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
