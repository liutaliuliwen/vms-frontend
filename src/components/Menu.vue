<template>
  <div class="menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进货管理</span>
        </template>
        <el-menu-item index="1-1">进货入库</el-menu-item>
        <el-menu-item index="1-2">退货出库</el-menu-item>
        <el-menu-item index="1-3">进货单据查询</el-menu-item>
        <el-menu-item index="1-4">退货单据查询</el-menu-item>
        <el-menu-item index="1-5">当前库存查询</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>销售管理</span>
        </template>
        <el-menu-item index="2-1">销售出库</el-menu-item>
        <el-menu-item index="2-2">客户退货</el-menu-item>
        <el-menu-item index="2-3">销售单据查询</el-menu-item>
        <el-menu-item index="2-4">客户退货单据查询</el-menu-item>
        <el-menu-item index="2-5">当前库存查询</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">库存管理</span>
        </template>       
        <el-menu-item index="3-1">商品报损</el-menu-item>
        <el-menu-item index="3-2">商品报溢</el-menu-item>
        <el-menu-item index="3-3">库存报警</el-menu-item>
        <el-menu-item index="3-4">报损报溢查询</el-menu-item>
        <el-menu-item index="3-5">当前库存查询</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">统计报表</span>
        </template>
        <el-menu-item index="4-1">供应商统计</el-menu-item>
        <el-menu-item index="4-2">客户统计</el-menu-item>
        <el-menu-item index="4-3">商品采购统计</el-menu-item>
        <el-menu-item index="4-4">商品销售统计</el-menu-item>
        <el-menu-item index="4-5">按日统计分析</el-menu-item>
        <el-menu-item index="4-6">按月统计分析</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">基础资料</span>
        </template>      
        <el-menu-item index="5-1">供应商管理</el-menu-item>
        <el-menu-item index="5-2">客户管理</el-menu-item>
        <el-menu-item index="5-3">商品管理</el-menu-item>
        <el-menu-item index="5-4">期初库存</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="6-1">系统日志</el-menu-item>
        <el-menu-item index="6-2">修改密码</el-menu-item>
        <el-menu-item index="6-3">安全退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import bus from '../eventBus'
export default {
  name: "Menu",
  props: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(index, indexPath){      
      // console.log(index, indexPath)
      bus.$emit('menuSelect',index, indexPath)
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
