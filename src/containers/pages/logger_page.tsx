import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import RequestLog from "../../components/request_log";
import loggerActions from "../../actions/logger_actions";

function mapStateToPropsReposPage(state: any) {
    return { 
        window: state.get("window")
    };
}

function mapDispatchToPropsReposPage(dispatch: Redux.Dispatch) {
    return { actions : bindActionCreators(loggerActions, dispatch) };
}

class LoggerPage extends React.Component<any, void> {
    public render() {
        return (
            <RequestLog height={this.props.window.get("windowHeight")} columnSize={4} />
        );
    }
}

export default connect(mapStateToPropsReposPage, mapDispatchToPropsReposPage)(LoggerPage);
