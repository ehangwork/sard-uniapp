<template>
  <scroll-view
    :id="scrollViewId"
    scroll-y
    style="height: 300px; border: 1px solid var(--sar-border-color)"
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
  </scroll-view>
</template>

<script setup lang="ts">
import { sleep, uniqid, useLoadMore } from 'sard-uniapp'
import { ref } from 'vue'

const scrollViewId = uniqid()

const mockData = Array(35)
  .fill(0)
  .map((_, i) => ({
    id: i + 1,
    name: `Name ${i + 1}`,
  }))

const mockApi = async (page: number, pageSize = 10) => {
  await sleep(500)
  const offset = (page - 1) * pageSize
  return {
    list: mockData.slice(offset, offset + pageSize),
    total: mockData.length,
  }
}

const listData = ref<{ id: number; name: string }[]>([])

const { status, onLoadMore, onReload, loadMoreId } = useLoadMore({
  scrollViewSelector: `#${scrollViewId}`,
  api: async (page) => {
    return mockApi(page).then(({ list = [], total = 0 }) => {
      listData.value = [...listData.value, ...list]
      return listData.value.length >= total || list.length === 0
    })
  },
})
</script>
