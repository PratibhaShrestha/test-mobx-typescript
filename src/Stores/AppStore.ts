import { observable, action, makeObservable } from "mobx";

export class AppStore {
    constructor() {
        makeObservable(this);
    }
    @observable
    overlayStageStatus = 0;

    @observable
    numberOfImages = 0;

    @action
    setOverlayStageStatus = status => {
        console.log("Setting overlay status ",status)
        this.overlayStageStatus = status;
    }

    @action
    setNumberOfImages = value => {
        this.numberOfImages = value;
    }
}
const appStore = new AppStore();
export default appStore;