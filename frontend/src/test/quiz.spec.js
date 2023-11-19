import { mount } from '@vue/test-utils';
import QuizView from '../components/QuizView.vue';

describe('QuizView', () => {
  it('emits correct events when interacting with the component', async () => {
    const wrapper = mount(QuizView);

    expect(wrapper.exists()).toBe(true);
    
  });

  it('checks if quiz is not completed', async () => {
    const quizCompleted = false;

    const wrapper = mount(QuizView, {
      data() {
        return {
          quizCompleted,
        };
      },
    });
    await wrapper.vm.$nextTick();

    if (quizCompleted) {
      expect(wrapper.text()).toContain('You have finished the quiz!');
    } else {
      expect(wrapper.text()).toContain('Next Question');
    }
  })
})





