<template>
  <page-meta :page-style="isLocked ? 'overflow: hidden' : ''"></page-meta>
  <doc-page title="SelectPopout 列表选择弹出框">
    <doc-demo title="基础使用">
      <DemoBasic />
    </doc-demo>

    <doc-demo title="选项分组">
      <DemoGroup />
    </doc-demo>

    <doc-demo title="多选">
      <DemoMultiple />
    </doc-demo>

    <doc-demo title="显示工具栏">
      <DemoToolbar />
    </doc-demo>

    <doc-demo title="最多选择个数">
      <DemoMultipleLimit />
    </doc-demo>

    <doc-demo title="禁用选项">
      <DemoDisabled />
    </doc-demo>

    <doc-demo title="自定义选项标签">
      <DemoCustomLabel />
    </doc-demo>

    <doc-demo title="自定义整个选项">
      <DemoCustomOption />
    </doc-demo>

    <doc-demo title="筛选选项">
      <DemoFilterable />
    </doc-demo>

    <doc-demo title="远程">
      <DemoRemote />
    </doc-demo>
  </doc-page>
</template>

<script setup lang="ts">
import { useCurrentPageLock } from 'sard-uniapp'
import DemoBasic from './demo/Basic.vue'
import DemoGroup from './demo/Group.vue'
import DemoMultiple from './demo/Multiple.vue'
import DemoToolbar from './demo/Toolbar.vue'
import DemoMultipleLimit from './demo/MultipleLimit.vue'
import DemoDisabled from './demo/Disabled.vue'
import DemoCustomLabel from './demo/CustomLabel.vue'
import DemoCustomOption from './demo/CustomOption.vue'
import DemoFilterable from './demo/Filterable.vue'
import DemoRemote from './demo/Remote.vue'

const { isLocked } = useCurrentPageLock()
</script>
