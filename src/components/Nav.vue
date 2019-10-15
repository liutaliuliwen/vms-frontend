<template>
  <div class="nav">
    <el-menu
      :router="true"
      default-active="2"
   
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
          <span slot="title">销售管理</span>
        </template>
        <el-menu-item index="2-1">销售出库</el-menu-item>
        <el-menu-item index="2-2">客户退货</el-menu-item>
        <el-menu-item index="2-3">销售单据查询</el-menu-item>
        <el-menu-item index="2-4">退货单据查询</el-menu-item>
        <el-menu-item index="2-5">当前库存查询</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">库存管理</span>
        </template>
        <el-menu-item index="3-1">商品报损</el-menu-item>
        <el-menu-item index="3-2">商品报溢</el-menu-item>
        <el-menu-item index="3-3">库存报警</el-menu-item>
        <el-menu-item index="3-4">报溢报损查询</el-menu-item>
        <el-menu-item index="3-5">当前库存查询</el-menu-item>
      </el-submenu>

        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">基础资料</span>
        </template>
        <el-menu-item index="/main/supplier">供应商管理</el-menu-item>
        <el-menu-item index="/main/customer">客户管理</el-menu-item>
        <el-menu-item index="/main/goods">商品管理</el-menu-item>
        <el-menu-item index="4-4">初期库存</el-menu-item>
      </el-submenu>

        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="5-1">系统日志</el-menu-item>
        <el-menu-item index="5-2">修改密码</el-menu-item>
        <el-menu-item index="5-3">安全退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import Header from "./Header";
import axios from "axios";
import qs from "qs";
export default {
  name: "Nav",
  props: {},
  //导入想要使用的组件
  components: {},

  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
