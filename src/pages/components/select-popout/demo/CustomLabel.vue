<template>
  <sar-select-popout
    v-model="value"
    v-model:visible="visible"
    title="请选择"
    @change="onChange"
  >
    <sar-select-option
      v-for="item in colors"
      :key="item.value"
      :value="item.value"
    >
      <template #label>
        <view class="flex gap-16">
          <view
            class="size-48 rounded-sm"
            :style="{ background: item.value }"
          ></view>
          <view>{{ item.label }}</view>
        </view>
      </template>
    </sar-select-option>
  </sar-select-popout>

  <sar-list card>
    <sar-list-item arrow hover @click="visible = true">
      <template #title>
        {{ value ? JSON.stringify(value) : '请选择' }}
      </template>
    </sar-list-item>
    <sar-list-item
      title="设置为：#FFDE0A (yellow)"
      arrow
      hover
      @click="value = '#FFDE0A'"
    />
    <sar-list-item title="清空" arrow hover @click="value = undefined" />
  </sar-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const colors = [
  {
    value: '#E63415',
    label: 'red',
  },
  {
    value: '#FF6600',
    label: 'orange',
  },
  {
    value: '#FFDE0A',
    label: 'yellow',
  },
  {
    value: '#1EC79D',
    label: 'green',
  },
  {
    value: '#14CCCC',
    label: 'cyan',
  },
  {
    value: '#4167F0',
    label: 'blue',
  },
  {
    value: '#6222C9',
    label: 'purple',
  },
]

const visible = ref(false)
const value = ref<string>()

const onChange = (value: any) => {
  console.log('change', value)
}
</script>
