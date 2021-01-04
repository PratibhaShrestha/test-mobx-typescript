import React, { Component } from 'react';
import appStore from '../Stores/AppStore'

class ImageDiv extends Component{
    render() {
        const visibility = appStore.overlayStageStatus === 2 ? 'visible' : 'hidden';
        return (
            <div id="imageDiv" style={{ visibility: visibility, maxHeight: 75, maxWidth: 75, overflowY: "scroll",wordWrap:"break-word",backgroundColor:"blue" }}>
                {/* This is the imageDiv */}
                <span>This is </span>
            </div>
        );
    }
}
export default ImageDiv;