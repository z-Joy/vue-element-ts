import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { getSidebarStatus, setSidebarStatus } from '@/utils/cookies'
import store from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType,
  drawerSize: string,
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  private isOpened: boolean = getSidebarStatus() !== 'closed';
  public sidebar = {
    opened: this.isOpened,
    withoutAnimation: false
  }

  public drawerSize = this.isOpened ? 'calc(100% - 210px)' : 'calc(100% - 54px)';

  public device = DeviceType.Desktop

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      this.drawerSize = 'calc(100% - 210px)'
      setSidebarStatus('opened')
    } else {
      this.drawerSize = 'calc(100% - 54px)'
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Mutation
  private TOGGLE_DEVICE(device: DeviceType) {
    this.device = device
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation: boolean) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public ToggleDevice(device: DeviceType) {
    this.TOGGLE_DEVICE(device)
  }
}

export const AppModule = getModule(App)
