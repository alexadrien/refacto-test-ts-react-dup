import React from 'react';
import { shallow } from 'enzyme';
import DomainFilter, { defaultFilterValue, domainsToOptions } from './DomainFilter.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter value={defaultFilterValue} domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })

  describe('options construction', () => {
    it('should construct the options properly', () => {
      const res = domainsToOptions([
        'US_OK-WOK',
        'FR_NK-WOL',
        'FR_OK-NPP',
        'EN_NK-NRP',
        'EN_BL-WOL',
      ]);

      expect(res).toEqual({
        countries: ['US', 'FR', 'EN'],
        classifications: ['OK', 'NK', 'BL'],
        subClassifications: ['WOK', 'WOL', 'NPP', 'NRP'],
      })
    })
  })
})
