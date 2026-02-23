<template>
  <sar-select-popout
    v-model="value"
    v-model:visible="visible"
    title="请选择"
    @change="onChange"
  >
    <sar-select-option-group
      v-for="group in regionData"
      :key="group.code"
      :label="group.name"
      :value="group.code"
    >
      <sar-select-option
        v-for="item in group.children"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </sar-select-option-group>
  </sar-select-popout>

  <sar-list card>
    <sar-list-item arrow hover @click="visible = true">
      <template #title>
        {{ value ? JSON.stringify(value) : '请选择' }}
      </template>
    </sar-list-item>
    <sar-list-item
      title="设置为：440100 (广州市)"
      arrow
      hover
      @click="value = 440100"
    />
    <sar-list-item title="清空" arrow hover @click="value = undefined" />
  </sar-list>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getRegionData } from 'region-data'

const regionData = getRegionData().slice(16, 20)

const visible = ref(false)
const value = ref<number | undefined>(450100)

const onChange = (value: any) => {
  console.log('change', value)
}
</script>
