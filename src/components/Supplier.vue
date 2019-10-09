<template>
  <div class="supplier">
    <h3>供应商管理</h3>
    <div class="control">
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="small"
        @click="dialogFormVisible = true"
      >添加</el-button>
      <el-button type="primary" icon="el-icon-edit" size="small">编辑</el-button>
      <el-button type="primary" icon="el-icon-delete" size="small">删除</el-button>
      <el-input class="keyword" placeholder="请输入内容" v-model="supplierName" clearable></el-input>
      <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
    </div>
    <div>
      <el-dialog title="添加供应商" :visible.sync="dialogFormVisible" width="550px">
        <el-form :model="form" label-position="left" :rules="rules" label-width="120px" ref="form">
          <el-form-item label="供应商名称：" prop="name">
            <el-input v-model="form.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contact">
            <el-input v-model="form.contact" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="number">
            <el-input v-model="form.number" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系地址：" prop="address">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注：" prop="remarks">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.remarks"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addSupplier('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <el-table :data="suppliers" style="width: 100%; margin-top: 20px">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="供应商名称" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="number" label="联系电话"></el-table-column>
      <el-table-column prop="address" label="联系地址"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>

    <el-pagination
     background
      layout="prev, pager, next" 
      :total="total"  
      :page-size="10"
        @current-change="handleCurrentChange"
      ></el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
export default {
  name: "Supplier",
  props: {},
  //导入想要使用的组件
  components: {},

  data() {
    return {
      supplierName: "",
      dialogFormVisible: false,
      suppliers: [],
      total: 0,
      form: {
        name: "",
        contact: "",
        number: "",
        address: "",
        remarks: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入供应商名称", trigger: "blur" },
          { min: 3, max: 45, message: "长度在 3 到 35 个字符", trigger: "blur" }
        ],
        contact: [{ required: true, message: "请输入联系人", trigger: "blur" }],
        number: [
          { required: true, message: "请输入联系电话", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入联系地址", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    addSupplier(formName) {
      this.dialogFormVisible = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/admin/supplier/save", qs.stringify(this.form))
            .then(response => {
              console.log(response);
              const { data } = response;
              const { success } = data;
              if (success) {
                this.$message({
                  showClose: true,
                  message: "恭喜你，这是一条成功消息",
                  type: "success"
                });
                axios
                  .post(
                    "/admin/supplier/list",
                    qs.stringify({ page: 1, rows: 10 })
                  )
                  .then(response => {
                    console.log(response);
                    const { data } = response;
                    const { rows, total } = data;
                    this.suppliers = rows;
                    this.toatl = total;
                  });
              } else {
                this.$message({
                  showClose: true,
                  message: "恭喜你，这是一条成功消息",
                  type: "error"
                });
              }
            })
            .finally(() => {
              this.$refs[formName].resetFields();
            });
        } else {
          return false;
        }
      });
    },

     handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
            axios
      .post("/admin/supplier/list", qs.stringify({ page: +val, rows: 10 }))
      .then(response => {
        console.log(response);
        const { data } = response;
        const { rows, total } = data;
        this.suppliers = rows;
        this.total = total;
      });
      }
  },

  mounted() {
    axios
      .post("/admin/supplier/list", qs.stringify({ page: 1, rows: 10 }))
      .then(response => {
        console.log(response);
        const { data } = response;
        const { rows, total } = data;
        this.suppliers = rows;
        this.total = total;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.supplier {
  flex: 1;
  padding: 20px;
}

.control {
  display: flex;
}

.keyword {
  margin-left: 30px;
  margin-right: 30px;
  width: 400px;
}
</style>
