import Vue from 'vue';
import Test from '@/components/Test';

describe('Test.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Test);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.test h1').textContent)
      .to.equal('Welcome to Test Vue.js App');
  });
});
