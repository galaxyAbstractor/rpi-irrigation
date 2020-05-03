import React, {Component} from "react";
import {ipcRenderer} from "electron";
import {Button, Icon} from 'semantic-ui-react'

class PlantUnit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pump: {
                pumpId: props.pump,
                moistureLevel: -1,
                pumpAtLevel: -1,
                active: false
            }
        };

        this.handleClick = this.handleClick.bind(this);

        ipcRenderer.on("update", (event, args) => {
            console.log(args);
            if (parseInt(args.pump.pumpId) === parseInt(this.state.pump.pumpId)) {
                console.log("Setting state!");
                this.setState(args)
            }
        })
    }

    handleClick(event) {
        ipcRenderer.send("test", {
            pump: this.state.pump.pumpId
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="row current-level">
                        <div className="col text-center">
                            <span>{this.state.pump.moistureLevel}</span>
                        </div>
                    </div>
                    <div className="row pump-at">
                        <div className="col text-center">
                            <Button.Group>
                                <Button icon primary>
                                    <Icon name="minus"/>
                                </Button>
                                <Button content={this.state.pump.pumpAtLevel} primary/>
                                <Button icon primary>
                                    <Icon name="plus"/>
                                </Button>
                            </Button.Group>
                        </div>
                    </div>
                    <div className="row control">
                        <div className="col text-center">
                            <Button.Group vertical labeled icon>
                                <Button icon='play' content='Pump' onClick={this.handleClick()} />
                                <Button icon='power' active={this.state.pump.active} toggle color={this.state.pump.active ? 'green' : 'red'} content={this.state.pump.active ? 'Active' : 'Inactive'} />
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlantUnit;