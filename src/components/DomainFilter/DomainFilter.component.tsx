import React from 'react';
import { threadId } from 'worker_threads';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {
  componentDidMount() {
    const { domains } = this.props
    this.state = {
      countries: [],
      classifications: [],
      subClassifications: []
    }

    this.setState({
      ...this.state,
      ...domainsToOptions(domains),
    })

    this.forceUpdate()
  }

  render() {
    const {countries, classifications, subClassifications} = this.state || {
      countries: [],
      classifications: [],
      subClassifications: []
    };

    return (<>
      <select name="countries" multiple>
        {countries.map(country => (
          <option value={country} key={country}>{country}</option>
        ))}
      </select>
      <select name="classifications" multiple>
        {classifications.map(classification => (
          <option value={classification} key={classification}>{classification}</option>
        ))}
      </select>
      <select name="subClassifications" multiple>
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

  // todo(al): possible to clean this logic?
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
