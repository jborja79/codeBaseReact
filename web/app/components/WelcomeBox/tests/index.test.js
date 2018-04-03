import React from 'react';
import { shallow } from 'enzyme';
import WelcomeBox, { config } from '../index';

describe('<WelcomeBox logo="sdsd" />', () => {
  const renderedComponent = shallow(
    <WelcomeBox />
  );

  it('should render text', () => {
    expect(renderedComponent.contains(
      config.labels.text
    )).toEqual(true);
  });
});
