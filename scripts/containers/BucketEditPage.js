import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BucketEditForm from "../components/BucketEditForm";
import * as BucketActions from "../actions/bucket";


function mapStateToProps(state) {
  return {
    session: state.session,
    bucket: state.bucket,
    capabilities: state.session.serverInfo.capabilities,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BucketActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BucketEditForm);
