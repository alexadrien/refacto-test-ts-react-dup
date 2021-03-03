import DomainFilter, { FilterValue } from './DomainFilter.component';
import { connect } from 'react-redux'
import { getDomains } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state)
})


type OwnProps = {
  value: FilterValue;
  onValueChange?: (value: FilterValue) => void;
}


// @ts-ignore todo(@alexstrat): fix connect typing for outter props
export default connect<AppState,{}, OwnProps>(mapStateToProps)(DomainFilter)
