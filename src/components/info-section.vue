<template>
  <transition name="el-fade-in" mode="out-in">
    <div class="info-section-new" :style="`background-color: ${bodyColor};height: ${height}`" :class="{noBottom}">
      <div v-if="head" class="header">
        <div class="title" :style="titleStyle">
          <span>{{ title }}</span>
          <div v-if="hint" class="hint">
            {{ hint }}
          </div>
          <slot name="hint" />
        </div>
        <!-- 放按钮之类的 -->
        <div v-if="showBtn && btnContent !== ''" class="btn-content" @click="handleClick">
          {{ btnContent }}
        </div>
        <!-- 文案 eg: 查看详情 -->
        <div v-if="!!textContent" class="text-content" @click="handleClick">
          {{ textContent }}<span class="zj-icon zj-icon-next1" />
        </div>
        <slot name="header" />
      </div>
      <div class="body" :style="bodyStyle" :class="{'no-border': noBorder}">
        <slot name="body" />
        <slot />
        <status v-if="showStatus && !popover" class="stauts" :color="statusColor" :status="statusText" :size="statusSize" @click.native="handleClickStatusBtn">
          <i v-if="hasIcon" :class="`zj-icon ${icon}`" style="margin-left: 14px; font-size: 12px" />
        </status>
        <el-popover
          v-if="popover"
          placement="right-start"
          width="298"
          popper-class="my-popover"
          trigger="click"
        >
          <slot name="pop-content" />
          <status slot="reference" class="stauts" :color="statusColor" :status="statusText" :size="statusSize" @click.native="handleClickStatusBtn">
            <i v-if="hasIcon" :class="`zj-icon ${icon}`" style="margin-left: 14px; font-size: 12px" />
          </status>
        </el-popover>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { addClass, removeClass } from '@/utils'
import { SettingsModule } from '@/store/modules/settings'
import status from './status.vue'

@Component({
  name: 'infoSection',
  components: {
    status
  }
})

export default class extends Vue {
  @Prop({ default: false }) private showStatus!: boolean
  @Prop({ default: false }) private popover!: boolean
  @Prop({ default: '' }) private statusColor!: string
  @Prop({ default: '' }) private statusSize!: string
  @Prop({ default: '' }) private statusText!: string
  @Prop({ default: '' }) private title!: string
  @Prop({ default: '' }) private hint!: string | Function
  @Prop({ default: '#fff' }) private bodyColor!: string
  @Prop({ default: '' }) private icon!: string
  @Prop({ default: '30px' }) private padding!: string
  @Prop({ default: true }) private head!: boolean
  @Prop({ default: false }) private hasIcon!: boolean
  @Prop({ default: false }) private noBottom!: boolean
  @Prop({ default: '' }) private btnContent!: string
  @Prop({ default: true }) private showBtn!: boolean
  @Prop({ default: 'background-color: #fff' }) private bodyStyle!: string
  @Prop({ default: '' }) private titleStyle!: string
  @Prop({ default: false }) private noBorder!: boolean
  @Prop({ default: '' }) private textContent!: string | Function
  @Prop({ default: '' }) private height!: string | number

  handleClick() {
    this.$emit('onClick');
  }

  handleClickStatusBtn() {
    this.$emit('handleClickStatusBtn');
  }

  handleShow() {
    this.$emit('onShow');
  }
}
</script>

<style lang="scss" scoped>
  .info-section-new {
    margin-bottom: 20px;
    position: relative;
    & > .header {
      padding: 0 20px;
      height: 56px;
      font-size: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 500;
      .title {
        display: flex;
        align-items: flex-end;
      }
      .hint {
        color: #999;
        font-size: 12px;
        font-weight: 400;
        margin-left: 10px;
      }
      .btn-content {
        height: 30px;
        line-height: 28px;
        padding: 0 15px;
        cursor: pointer;
        font-size: 13px;
        color: #999;
        border-radius: 4px;
        border: 1px solid rgba(217,217,217,1);
        box-sizing: border-box;
        &:hover {
          background-color: #49C5B6;
          border-color: #49C5B6;
          color: #ffffff;
        }
      }
      .text-content {
        font-size: 12px;
        color: #999;
        cursor: pointer;
        .zj-icon {
          margin-left: 3px;
          font-size: 12px;
        }
      }
    }
    & > .body {
      position: relative;
      border-top: 1px solid #E9E9E9;
      box-sizing: border-box;
      padding: 26px;
      .stauts {
        position: absolute;
        right: 0;
        top: 25px;
      }
    }
    & > .no-border {
      border-top: 0;
    }

  }

  .noBottom {
    margin-bottom: 0;
  }
</style>
