import { shallow } from 'enzyme';
import Container from './Container';

describe('Container', () => {
  it('should wrap children', () => {
    const component = shallow(<Container><div /></Container>);
    expect(component.find('div')).toHaveLength(1);
  });
});
