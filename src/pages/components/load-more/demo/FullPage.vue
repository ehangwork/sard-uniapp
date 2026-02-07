<template>
  <view>
    <doc-page title="页面触底加载">
      <sar-list>
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
    </doc-page>
  </view>
</template>

<script setup lang="ts">
import { sleep, useLoadMore } from 'sard-uniapp'
import { ref } from 'vue'

const mockData = Array(75)
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
  api: async (page) => {
    return mockApi(page).then(({ list = [], total = 0 }) => {
      listData.value = [...listData.value, ...list]
      return listData.value.length >= total || list.length === 0
    })
  },
})
</script>
