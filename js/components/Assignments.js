import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  components: {
    AssignmentList,
    AssignmentCreate,
  },
  template:
    /*html*/
    `
    <section class="space-y-6">
      <assignment-list :assignments="unfinishedAssignments" title="Unfinished Assignments"></assignment-list>
      <assignment-list :assignments="completedAssignments" title="Completed Assignments"></assignment-list>
      <assignment-create @add="add"></assignment-create>
    </section>
    `,

  data() {
    return {
      assignments: [
        { name: "Complete math HW", complete: false, id: 1, tag: "Math" },
        { name: "Science paper due", complete: false, id: 2, tag: "Science" },
        { name: "Study for math test", complete: false, id: 3, tag: "Math" },
      ],
      newAssignment: "",
    };
  },
  computed: {
    completedAssignments() {
      return this.assignments.filter((a) => a.complete);
    },
    unfinishedAssignments() {
      return this.assignments.filter((a) => !a.complete);
    },
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
