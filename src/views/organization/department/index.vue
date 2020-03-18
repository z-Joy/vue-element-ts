<template>
  <div class="app-container">
    <InfoSection title="部门列表">
      <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        :tree-props="treeProps"
      >
        <el-table-column
          prop="date"
          label="部门名称"
          sortable
          width="180"
        >
          <template slot-scope="scope">
            <el-checkbox v-model="checkObj[scope.row.id]" />
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="部门类型"
          sortable
          width="180"
        />
        <el-table-column
          prop="name"
          label="成员人数（个）"
        />
        <el-table-column
          prop="name"
          label="全职人数（个）"
        />
        <el-table-column
          prop="name"
          label="兼职人数（个）"
        />
        <el-table-column
          prop="name"
          label="离职人数（个）"
        />
        <el-table-column
          prop="name"
          label="部门主管"
        />
        <el-table-column
          prop="name"
          label="部门助理"
        />
        <el-table-column
          prop="name"
          label="所属公司"
        />
        <el-table-column
          prop="name"
          label="部门编号"
        />
        <el-table-column
          prop="name"
          label="创建人"
        />
        <el-table-column
          prop="date"
          label="创建时间"
        />
        <el-table-column
          prop="date"
          label="创建时间"
        >
          <template slot-scope="scope">
            <div class="btz-flex between">
              <span class="btz-green btz-hover" @click.stop="handleSeeDetail(scope.row.id)">查看</span>
              <span>删除</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </InfoSection>
    <el-button type="primary" @click="handleSubmit">提交</el-button>
    <right-panel :show-panel="showPanel" @close="handleClose">
      <component :is="componentName" />
    </right-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import InfoSection from '../../../components/info-section.vue'
import { DepartmentModule } from '../store/department'
import Detail from './detail.vue'
import RightPanel from '@/components/RightPanel/index.vue'

@Component({
  name: 'Tree',
  components: {
    InfoSection,
    RightPanel,
    Detail
  }
})
export default class extends Vue {
  private filterText: string = '';
  private treeProps: object = { children: 'children', hasChildren: 'hasChildren' };
  private componentName: string = 'Detail';
  private tableData: object[] = [{
    id: 1,
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄',
    children: [{
      id: 11,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      children: [{
        id: 111,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }]
    }, {
      id: 12,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }]
  }, {
    id: 2,
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄',
    children: [{
      id: 21,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id: 22,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }]
  }, {
    id: 3,
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄',
    children: [{
      id: 31,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id: 32,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }]
  }, {
    id: 4,
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄',
    children: [{
      id: 41,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id: 42,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }]
  }]
  private checkObj: object = {}

  private handleSubmit() {
    console.log(this.checkObj, 'checkObj');
  }

  get showPanel() {
    return DepartmentModule.showPanel
  }

  private handleSeeDetail(id: number) {
    DepartmentModule.updateShowPanel(true);
  }

  private handleClose() {
    DepartmentModule.updateShowPanel(false)
  }
}
</script>
