<template>
  <div class="activity-edit">
    <div class="generate-button">
      <button type="primary"
              plain
              @click="generate">生成</button>
    </div>

  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Activity',
  components: {
    baseTool,
    stageTool,
    propertyTool
  },
  data() {
    return {
      showProperty: true,
      propertyItemNum: -1,
      propertyItemName: ''
    }
  },
  methods: {
    ...mapActions(['activity_generate']),
    openPropertyTool({ index, temName }) {
      this.propertyItemNum = index
      this.propertyItemName = temName
      this.showProperty = true
    },
    generate() {
      this.activity_generate()
    },
    changePropertyItemNum(num) {
      console.log('asfas')
      this.propertyItemNum = num
    }
  }
}
</script>
<style lang="less" scoped>
.activity-edit {
  min-width: 1100px;

  .tool-wrap {
    display: flex;
  }
  .generate-button {
    margin-top: 20px;
  }
}
</style>