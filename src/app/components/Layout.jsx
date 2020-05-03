import React, {Component} from "react";
import PlantUnit from "./PlantUnit";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="main">
                <div className="row row-unit-control no-gutters">
                    <div className="col col-plant">
                        <div className="plant-unit">
                            <PlantUnit pump="0" />
                        </div>
                    </div>
                    <div className="col col-plant">
                        <div className="plant-unit">
                            <PlantUnit pump="1" />
                        </div>
                    </div>
                    <div className="col col-plant">
                        <div className="plant-unit">
                            <PlantUnit pump="2" />
                        </div>
                    </div>
                    <div className="col col-plant">
                        <div className="plant-unit">
                            <PlantUnit pump="3" />
                        </div>
                    </div>
                </div>
                <div className="row row-graph no-gutters">
                    <div className="col">

                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;