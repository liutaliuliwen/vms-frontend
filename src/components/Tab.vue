<template>
<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
  <el-tab-pane
    v-for="(item) in editableTabs"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </el-tab-pane>
</el-tabs>
</template>

<script>
import bus from '../eventBus'
export default {
  name: "Tab",
  props: {},
  methods: {
      addTab(targetName, tabTitle) {
          let newTabName = ++this.tabIndex+''
          this.editableTabs.push({
              title: tabTitle,
              name: newTabName,
              content: 'New Tab content'
          })
          this.editableTabsValue = newTabName
      },

      removeTab(targetName) {
          let tabs = this.editableTabs
          let activeName = this.editableTabsValue
          if (activeName === targetName){
              tabs.forEach((tab, index) => {
                  let nextTab = tabs[index + 1] || tabs[index -1]
                  if (nextTab){
                      activeName = nextTab.name
                  }
              })
          }
            this.editableTabsValue = activeName
            this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      }
  },
  created(){
      bus.$on('menuSelect',(index, indexPath) => {
          console.log(index, indexPath)
          if(index === '5-1'){
            //判断tab页是否展示
            //没有就添加新的tab 有就激活
            const tab = this.editableTabs.find(tab => tab.name === index)
            if(tab === null){
               this.addTab(index,'供应商管理')
            }else{
              
            }
           
          }
      })
  },
  data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
