import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { About } from './about.container';
import PageHeadline from '../../components/pageHeadline/pageHeadline.component'
import TriColoredBars from '../../components/triColoredBars/triColoredBars.component'

describe('About', () => {
  it('should render About', () => {
    const wrapper = shallow(<About/>);
    expect(wrapper.containsAllMatchingElements([
      <PageHeadline title={"Work History"} />
    ])).to.equal(true);
  });
});
