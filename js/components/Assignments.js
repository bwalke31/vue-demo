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
      assignments: [],
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

  created() {
    fetch("http://localhost:3001/assignments")
      .then((resp) => resp.json())
      .then((assignments) => {
        console.log(assignments);
        this.assignments = assignments;
      });
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
