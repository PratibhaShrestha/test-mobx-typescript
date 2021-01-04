import { observer } from 'mobx-react';
import React, { Component } from 'react';
import appStore from '../Stores/AppStore';
import ImageDiv from './ImageDiv';

@observer
class MainDiv extends Component {
    handleMouseOver = (ev) => {
        console.log("Handling mouseover");
        appStore.setOverlayStageStatus(1);
    }

    handleMouseLeave = (ev) => {
        console.log("Handling mouseout");
        appStore.setOverlayStageStatus(0);
        clearTimeout(this.timer);
    }
     timer:any = null;
    render() {
        const overlayStage = appStore.overlayStageStatus;
        if (overlayStage === 1) {
            this.timer = setTimeout(() => appStore.setOverlayStageStatus(2), 50);
        }
        if (overlayStage === 2) {
        const imageDiv = document.getElementById("imageDiv")!!;
        const divGeometry = imageDiv.getBoundingClientRect();
        console.log("divGeometry", divGeometry)
        }
        console.log("Rendering MainDiv", overlayStage)
        const overlay = overlayStage ? <ImageDiv /> : null;
        return (
            <div style={{ maxHeight: "100px", backgroundColor: "red" }} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseOver} onClick={this.handleMouseOver}>
                <img src="/Mock-3-4.png" alt="Sun" style={{width:"auto",height:"100"}}/>
                <img src="/Mock-3-5.png" alt="Sun" style={{width:"auto",height:"100"}}/>
                Some more text, the overlayStageStatus = {overlayStage}
                { overlay}
            </div >
        );
    }
}

export default MainDiv;