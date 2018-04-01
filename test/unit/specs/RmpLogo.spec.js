import Vue from 'vue';
import RmpLogo from '../../../src/components/common/RmpLogo';

describe('RmpLogo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(RmpLogo);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.logo span').textContent)
      .to.not.equal(null);
  });
});
