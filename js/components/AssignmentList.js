import AssignmentSingle from "./AssignmentSingle.js";

export default {
  components: {
    AssignmentSingle,
  },
  template:
    /*html*/
    `
    <section v-show="assignments.length > 0">
          <h1>{{title}}</h1>
          <ul>
            <assignment-single
                v-for="assignment in assignments" 
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
};
