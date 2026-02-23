<template>
  <sar-list card>
    <sar-list-item>
      <sar-select-input
        v-model="value"
        title="请选择"
        placeholder="请选择"
        clearable
        :options="colors"
        @change="onChange"
      >
        <view class="grid grid-cols-2 gap-16 px-32">
          <sar-select-option
            v-for="item in colors"
            :key="item.value"
            :value="item.value"
            plain
          >
            <template #default="{ selected }">
              <view
                class="box-border flex-1 flex p-16 border border-base border-solid gap-16 rounded"
                :class="{ 'border-primary': selected }"
                style="width: calc((100vw - 32rpx * 2 - 16rpx) / 2)"
              >
                <view
                  class="size-48 rounded-sm"
                  :style="{ background: item.value }"
                ></view>
                <view>{{ item.label }}</view>
              </view>
            </template>
          </sar-select-option>
        </view>
      </sar-select-input>
    </sar-list-item>

    <sar-list-item
      title="当前值："
      :value="JSON.stringify(value) ?? 'undefined'"
    />
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
]

const value = ref<string>()

const onChange = (value: any) => {
  console.log('change', value)
}
</script>
