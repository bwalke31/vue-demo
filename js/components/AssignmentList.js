import AssignmentSingle from "./AssignmentSingle.js";

export default {
  components: {
    AssignmentSingle,
  },
  template:
    /*html*/
    `
    <section v-show="assignments.length > 0">
          <h1>{{title}}
           <span>({{assignments.length}})</span>
          </h1>

          <div class="flex gap-3">
            <button 
            @click="currentTag = tag"
            v-for="tag in tags" 
            class="hover:bg-sky-700 border rounded px-1 py-0.5 my-2"
            :class="{
              'bg-green-500 border-black': tag == currentTag
            }"
            >
              {{tag}}
              </button>
          </div>
         
          <ul>
            <assignment-single
                v-for="assignment in filteredAssignments" 
                :key="assignment.id"
                :assignment="assignment">
            </assignment-single>
          </ul>
        </section>
    `,

  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredAssignments() {
      if (this.currentTag == "all") return this.assignments;
      return this.assignments.filter((a) => a.tag == this.currentTag);
    },
    tags() {
      return ["all", ...new Set(this.assignments.map((a) => a.tag))];
    },
  },
};
