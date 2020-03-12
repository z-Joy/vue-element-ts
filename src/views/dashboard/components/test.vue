<template>
  <el-button type="primary">
    {{ title }}
  </el-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Dashboard'
})
export default class extends Vue {
  private title: string = 'test'
}
</script>
