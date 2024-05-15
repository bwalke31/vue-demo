import AssignmentList from "./AssignmentList.js";

export default {
  components: {
    AssignmentList,
  },
  template:
    /*html*/
    `
    <section class="space-y-6">
      <assignment-list :assignments="unfinishedAssignments" title="Unfinished Assignments"></assignment-list>
      <assignment-list :assignments="completedAssignments" title="Completed Assignments"></assignment-list>
    </section>
    `,

  data() {
    return {
      assignments: [
        { name: "A1", complete: false, id: 1 },
        { name: "A2", complete: false, id: 2 },
        { name: "A3", complete: false, id: 3 },
      ],
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
};
