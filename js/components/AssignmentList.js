import AssignmentSingle from "./AssignmentSingle.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: {
    AssignmentSingle,
    AssignmentTags,
  },
  template:
    /*html*/
    `
    <section v-show="assignments.length > 0">
          <h1>{{title}}
           <span>({{assignments.length}})</span>
          </h1>

          <assignment-tags 
          :initial-tags="assignments.map(a => a.tag)"
          :current-tag="currentTag"
          @change="currentTag = $event">
          </assignment-tags>
         
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
  },
};
