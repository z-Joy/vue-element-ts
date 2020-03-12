<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      name:{{ name }}
    </div>
    <div class="dashboard-text">
      roles:<span
        v-for="role in roles"
        :key="role"
      >{{ role }}</span>
    </div>
    <el-button
      type="primary"
      @click.stop="() => showPanel = true"
    >
      open right-panel
    </el-button>
    <el-drawer
      :size="drawerSize"
      :visible.sync="showPanel"
      :before-close="handleClose"
    >
      <div slot="title">
        test
      </div>
      <test />
    </el-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/modules/user'
import { AppModule } from '@/store/modules/app'
import RightPanel from '@/components/RightPanel/index.vue'
import Test from './components/test.vue'

@Component({
  name: 'Dashboard',
  components: {
    RightPanel,
    Test
  }
})
export default class extends Vue {
  private showPanel: boolean = false;

  get name() {
    return UserModule.name
  }

  get roles() {
    return UserModule.roles
  }

  get drawerSize() {
    return AppModule.drawerSize
  }

  private handleClose() {
    this.showPanel = false;
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
