<template>
  <div class="goodsType">
      <h3>商品类别</h3>
      <el-tree
  :data="goodsTypeTree"
  show-checkbox
  node-key="id"
 >
</el-tree>
  </div>
</template>

<script>
import axios from "../request"
import qs from "qs"
import {toTree} from '../treeUtils'
export default {
  name: 'GoodsType',
    //导入想要使用的组件
  components: {},

  data() {
     return {
        data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        allType:[],
     
      };
  },

  methods: {
      getAllGoodsType(){
        axios.get('/admin/goodsType/allType').then(response => {
          console.log(response)
          const {data} = response
          this.allType = data

        })
      }
  },

  computed: {
    goodsTypeTree(){
      return toTree(this.allType.map(item => ({...item,label: item.name})))
    }
  },

  mounted() {
    this.getAllGoodsType()
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .goodsType{
    width: 400px;
    overflow: auto;
    border-right: 4px solid #eee;
  }
</style>
