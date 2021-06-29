import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

let wrapper;
describe('Testa componente `<Footer />`', () => {
  describe('Crie um componente `<Footer />`', () => {
    it('Componente é renderizado`', () => {
      shallow(<Footer />);
    });
  });

  describe('Componente renderiza texto dentro de uma tag h6', () => {
    it('Renderiza "Compilado por Movie Cards Library." como default', () => {
      wrapper = shallow(<Footer />);

      expect(wrapper.find('footer h6').text()).toBe('Compilado por Movie Cards Library.');
    });

    it('Renderiza prop passada como parâmetro', () => {
      wrapper = shallow(<Footer name="Diogo Sant'Anna" />);

      expect(wrapper.find('footer h6').text()).toBe('Compilado por Diogo Sant\'Anna.');
    });
  });
});
