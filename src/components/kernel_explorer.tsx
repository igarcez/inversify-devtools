import * as React from "react";
import { Link } from "react-router";
import Panel from "./panel";

const dir = {
    close: "&#9657",
    open: "&#9663;"
};

class KernelExplorer extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Panel title={"Kernels"} subtitle={"Explorer"} columnSize={this.props.columnSize} height={this.props.height}>
                // TODO
            </Panel>
        );
    }
}

export default KernelExplorer;
