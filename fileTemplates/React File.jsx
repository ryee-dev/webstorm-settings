/**
 * Created by ${USER} on ${DATE}.
 */

import React from "react";

class ${NAME} extends React.Component {
    state = {};
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>${NAME} Component</div>
        );
    }

    static propTypes = {
        var1: React.PropTypes.number,
        var2: React.PropTypes.string,
        var3: React.PropTypes.func.isRequired,
        var4: React.PropTypes.oneOf(["type1", "type2"])
    };

    static defaultProps = {};
}

export default ${NAME};