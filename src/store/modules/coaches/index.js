import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Asparuh',
          lastName: 'Asparuhov',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Asparuh and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Ilonka',
          lastName: 'Ilonkova',
          areas: ['frontend', 'career'],
          description:
            'I am Ilonka and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
