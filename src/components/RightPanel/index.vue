<template>
  <el-drawer
    :size="drawerSize"
    :visible="showPanel"
    @close="handleClose"
  >
    <div class="title-box" slot="title">
      <div>{{ title }}</div>
      <div class="operation">
        <el-button type="primary">提交</el-button>
      </div>
    </div>
    <slot />
  </el-drawer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'

@Component({
  name: 'RightPanel'
})

export default class extends Vue {
  @Prop({ type: String, default: '详情' }) private title!: string
  @Prop({ type: Boolean, default: false }) private showPanel!: boolean

  get drawerSize() {
    return AppModule.drawerSize
  }

  private handleClose() {
    this.$emit('close');
  }
}

</script>

<style lang="scss">
.title-box {
  display: flex;
  justify-content: space-between;
  .operation {
    & > div {
      margin-right: 20px;
    }
  }
}

</style>
