export default {
  template:
    /*html*/
    `
    <li>
        <label :class="assignment.complete ? 'slash-through' : ''">
        {{assignment.name}}
        <input type="checkbox" v-model="assignment.complete" />
        </label>
    </li>
    `,
  props: {
    assignment: Object,
  },
};
