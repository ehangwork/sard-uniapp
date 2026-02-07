<template>
  <page-meta :page-style="isLocked ? 'overflow: hidden' : ''"></page-meta>
  <doc-page title="LoadMore 加载更多">
    <doc-demo title="基础使用">
      <DemoBasic />
    </doc-demo>

    <doc-demo title="配合 useLoadMore 钩子函数使用">
      <DemoHook />
    </doc-demo>

    <doc-demo title="配合 PullDownRefresh 组件使用">
      <DemoWithRefresh />
    </doc-demo>

    <doc-demo title="页面触底加载" full>
      <sar-list>
        <sar-list-item
          title="页面触底加载"
          arrow
          hover
          @click="navigateTo('FullPage')"
        />
      </sar-list>
    </doc-demo>
  </doc-page>
</template>

<script setup lang="ts">
import { useCurrentPageLock, usePageTopPopup } from 'sard-uniapp'
import { onBackPress } from '@dcloudio/uni-app'
import DemoBasic from './demo/Basic.vue'
import DemoHook from './demo/Hook.vue'
import DemoWithRefresh from './demo/WithRefresh.vue'

const navigateTo = (url: string) => {
  uni.navigateTo({
    url: `/pages/components/load-more/demo/${url}`,
  })
}

const { isLocked } = useCurrentPageLock()

const { shouldStopBack, hidePopup } = usePageTopPopup()

onBackPress(() => {
  if (shouldStopBack.value) {
    hidePopup()
    return true
  }
})
</script>
