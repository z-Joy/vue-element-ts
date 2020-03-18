import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken } from '@/utils/cookies'
import store from '@/store'

export interface IDepartmentState {
  token: string
  showPanel: boolean
}

@Module({ dynamic: true, store, name: 'user' })
class Department extends VuexModule implements IDepartmentState {
  public token = getToken() || ''
  public showPanel = false

  @Mutation
  public updateShowPanel(bool: boolean) {
    this.showPanel = bool
  }
}

export const DepartmentModule = getModule(Department)
