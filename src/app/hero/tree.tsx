import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Injector } from '@angular/core';

const ReactChildComponent = React.createClass({

render: function() {
return(
<div>
  Hello React
</div>
);
}
});

export class ReactChildComponentView {

static initialize(title, s, injector) {
    ReactDOM.render(<ReactChildComponent />, document.getElementById('v'));
}
}
