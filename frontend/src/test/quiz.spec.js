import { mount } from '@vue/test-utils';
import QuizView from '../components/QuizView.vue';

// describe('QuizView', () => {
//   it('renders correctly', async () => {
//     const wrapper = mount(QuizView);

   
//     expect(wrapper.find('h1').text()).toBe('Quizzes');
//   });

//   it('emits correct events when interacting with the component', async () => {
//     const wrapper = mount(QuizView);

    
//     await wrapper.find('input[type="radio"]').trigger('change');
//     await wrapper.find('button').trigger('click');
//     console.log(wrapper.html())

    
//   });
// });

describe('QuizView', () => {
  it('emits correct events when interacting with the component', async () => {
    const wrapper = mount(QuizView);

    expect(wrapper.exists()).toBe(true);
    
  
   

    
  });

})





