<template>
  <sar-list card>
    <sar-list-item>
      <sar-select-input
        v-model="value"
        title="请选择"
        placeholder="请选择"
        clearable
        multiple
        show-toolbar
        :max-labels="3"
        :options="regionData"
        :option-keys="{ label: 'name', value: 'code', children: '' }"
        @change="onChange"
      />
    </sar-list-item>

    <sar-list-item
      title="当前值："
      :value="JSON.stringify(value) ?? 'undefined'"
    />
    <sar-list-item
      title="设置为：[440000, 450000] (广东省，广西)"
      arrow
      hover
      @click="value = [440000, 450000]"
    />
    <sar-list-item title="清空" arrow hover @click="value = undefined" />
  </sar-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRegionData } from 'region-data'

const regionData = getRegionData()

const value = ref<number[]>()

const onChange = (value: any) => {
  console.log('change', value)
}
</script>
