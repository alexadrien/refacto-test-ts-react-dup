import React from 'react';
import { threadId } from 'worker_threads';


export type FilterValue = {
  country: string[],
  classification: string[],
  subClassification: string[]
}

export const defaultFilterValue: FilterValue = { country: [], classification: [], subClassification: [] }

interface Props {
  domains: string[];
  value: FilterValue;
  onValueChange?: (value: FilterValue) => void;
}

class DomainFilter extends React.Component<Props> {

  render() {
    const { domains, value, onValueChange } = this.props;

    // todo(alexstrat): add memoization here for the peace of mind
    const { countries, classifications, subClassifications } = domainsToOptions(domains);

    return (<>
      <select
        name="countries"
        multiple
        value={value.country || undefined}
        onChange={(e) => onValueChange && onValueChange({...value, country: [e.target.value]})}
      >
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select
        name="classifications"
        multiple
        value={value.classification || undefined}
        onChange={(e) => onValueChange && onValueChange({ ...value, classification: [e.target.value] })}
      >
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select
        name="subClassifications"
        multiple
        value={value.subClassification || undefined}
        onChange={(e) => onValueChange && onValueChange({ ...value, subClassification: [e.target.value] })}
      >
        {subClassifications.map(subClassification => (
          <option value={subClassification} key={subClassification}>{subClassification}</option>
        ))}
      </select>
    </>)
  }
}

type Options = {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

/**
 * Will transform a set of domains into availabale options for country code, classifications, sub classifications.
 */
export const domainsToOptions = (domains: string[]): Options => {
  const options: Options = {
    countries: [],
    classifications: [],
    subClassifications: [],
  };

  // todo(alexstrat): possible to clean this logic?
  for (let i = 0; i < domains.length; i++) {
    if (options.countries.indexOf(domains[i].substring(0, 2)) <= 0) {
      options.countries.push(domains[i].substring(0, 2))
    }
    options.classifications.push(domains[i].substring(3, 5));
    let flag = false;
    for (let j = 0; j < options.subClassifications.length; j++) {
      if (options.subClassifications[j] == domains[i].substring(6)) {
        flag = true
        break;
      }
    }
    if (!flag) {
      options.subClassifications.push(domains[i].substring(6));
    }

    options.classifications = options.classifications.filter((e, i, l) => l.indexOf(e) === i);
  }

  return options;
}

export default DomainFilter
