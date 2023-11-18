import { mount } from '@vue/test-utils';
import QuizComponent from './QuizComponent.vue';

describe('QuizComponent', () => {
  it('renders correctly', async () => {
    const wrapper = mount(QuizComponent);

    // Add your test assertions here

    // For example:
    expect(wrapper.find('h1').text()).toBe('Quizzes');
  });

  it('emits correct events when interacting with the component', async () => {
    const wrapper = mount(QuizComponent);

    // Simulate user interactions and check if the expected events are emitted

    // For example:
    await wrapper.find('input[type="radio"]').trigger('change');
    await wrapper.find('button').trigger('click');

    // Add your test assertions here
  });
});
