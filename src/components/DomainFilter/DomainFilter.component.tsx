import React from 'react';
import { extractCountriesClassifications, ICountryClassification } from '../../data/domain';

interface State extends ICountryClassification {
}

interface Props {
  domains: string[]
}

class DomainFilter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      countries: [],
      classifications: [],
      subClassifications: []
    }
  }

  componentDidMount() {
    const { domains } = this.props

    this.setState(extractCountriesClassifications(domains))

    this.forceUpdate()
  }

  render() {
    const {countries, classifications, subClassifications} = this.state

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

export default DomainFilter
