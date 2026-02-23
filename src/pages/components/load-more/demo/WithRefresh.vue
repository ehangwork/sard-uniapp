<template>
  <scroll-view
    :id="scrollViewId"
    scroll-y
    style="height: 300px; border: 1px solid var(--sar-border-color)"
    :throttle="false"
    @scroll="onScroll"
    @scrolltoupper="onScrolltoupper"
  >
    <sar-pull-down-refresh
      ref="pullDownRefresh"
      :loading="refreshing"
      :disabled="status === 'loading'"
      @refresh="onRefresh"
    >
      <sar-list inlaid>
        <sar-list-item
          v-for="item in listData"
          :key="item.id"
          :title="item.name"
        />
      </sar-list>
      <view :id="loadMoreId">
        <sar-load-more
          :status="status"
          @load-more="onLoadMore"
          @reload="onReload"
        />
      </view>
    </sar-pull-down-refresh>
  </scroll-view>
</template>

<script setup lang="ts">
import { sleep, uniqid, useLoadMore } from 'sard-uniapp'
import { ref } from 'vue'

// 数据
const mockData = Array(35)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
  }))

const mockRequest = async (page: number, pageSize = 10) => {
  await sleep(500)
  const offset = (page - 1) * pageSize
  return {
    list: mockData.slice(offset, offset + pageSize),
    total: mockData.length,
  }
}

const listData = ref<{ id: number; name: string }[]>([])

// 下拉刷新
const refreshing = ref(false)
const pullDownRefresh = ref()

const onScroll = (event: any) => {
  pullDownRefresh.value?.enableToRefresh(event.detail.scrollTop === 0)
}

const onScrolltoupper = () => {
  pullDownRefresh.value?.enableToRefresh(true)
}

const onRefresh = () => {
  refreshing.value = true
  refresh().finally(() => {
    refreshing.value = false
  })
}

// 加载更多
const scrollViewId = uniqid()

const { status, onLoadMore, onReload, refresh, loadMoreId } = useLoadMore({
  scrollViewSelector: `#${scrollViewId}`,
  request: async (page, isRefresh) => {
    return mockRequest(page).then(({ list = [], total = 0 }) => {
      if (isRefresh) {
        listData.value = [...list]
      } else {
        listData.value = [...listData.value, ...list]
      }
      return listData.value.length >= total || list.length === 0
    })
  },
})
</script>
