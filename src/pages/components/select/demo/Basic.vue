<template>
  <sar-list card>
    <sar-list-item>
      <sar-select v-model="value" @change="onChange">
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
      </sar-select>
    </sar-list-item>
    <sar-list-item
      title="当前值："
      :value="JSON.stringify(value) ?? 'undefined'"
    />
    <sar-list-item
      title="设置为：440100 (广州市)"
      arrow
      hover
      @click="value = 440100"
    />
    <sar-list-item title="清空" arrow hover @click="value = undefined" />
  </sar-list>
</template>

<script lang="ts" setup>
import { getRegionData } from 'region-data'
import { ref } from 'vue'

const regionData = getRegionData().slice(16, 20)

const value = ref<number | undefined>(450100)

const onChange = (value: any) => {
  console.log('change', value)
}
</script>
