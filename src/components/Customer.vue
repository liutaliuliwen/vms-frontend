<template>
  <div class="customer">
    <h3>客户管理</h3>
    <div class="control">
      <el-button
        type="primary"
        icon="el-icon-plus"
        size="small"
        @click="dialogFormVisible = true"
      >添加</el-button>
      <el-button type="primary" icon="el-icon-edit" size="small" @click="showEditedSupplier">编辑</el-button>
      <el-button type="primary" icon="el-icon-delete" size="small" @click="showWarnMsgBox">删除</el-button>
      <el-input class="keyword" placeholder="请输入内容" v-model="querySupplierName" clearable></el-input>
      <el-button
        type="primary"
        icon="el-icon-search"
        size="small"
        @click="searchSupplier(querySupplierName)"
      >搜索</el-button>
    </div>
    <div>
      <el-dialog title="添加客户" :visible.sync="dialogFormVisible" width="550px">
        <el-form :model="form" label-position="left" :rules="rules" label-width="120px" ref="form">
          <el-form-item label="客户名称：" prop="name">
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

    <div>
      <el-dialog title="编辑客户" :visible.sync="editFormVisible" width="550px">
        <el-form
          :model="editedSupplier"
          label-position="left"
          :rules="rules"
          label-width="120px"
          ref="editedForm"
        >
          <el-form-item label="客户名称：" prop="name">
            <el-input v-model="editedSupplier.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系人：" prop="contact">
            <el-input v-model="editedSupplier.contact" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话：" prop="number">
            <el-input v-model="editedSupplier.number" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系地址：" prop="address">
            <el-input v-model="editedSupplier.address" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="备注：" prop="remarks">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="editedSupplier.remarks"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="editSupplier('editedForm')">确 定</el-button>
        </div>
      </el-dialog>
    </div>

    <el-table
      :data="suppliers"
      style="width: 100%; margin-top: 20px"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column prop="id" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="客户名称" width="180"></el-table-column>
      <el-table-column prop="contact" label="联系人"></el-table-column>
      <el-table-column prop="number" label="联系电话"></el-table-column>
      <el-table-column prop="address" label="联系地址"></el-table-column>
      <el-table-column prop="remarks" label="备注"></el-table-column>
    </el-table>

    <el-pagination
      class="pagination"
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
  name: "Customer",
  props: {},
  //导入想要使用的组件
  components: {},

  data() {
    return {
      pageSize: 10,
      currentPage: 1,
      querySupplierName: "",
      dialogFormVisible: false,
      editFormVisible: false,
      suppliers: [],
      total: 0,
      editedSupplier: {},
      multipleSelection: [],
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
            .post("/admin/customer/save", qs.stringify(this.form))
            .then(response => {
              console.log(response);
              const { data } = response;
              const { success } = data;
              if (success) {
                this.$message({
                  showClose: true,
                  message: "添加客户成功",
                  type: "success"
                });
                this.getCustomerList(this.currentPage, this.pageSize);
              } else {
                this.$message({
                  showClose: true,
                  message: "添加客户失败",
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

    editSupplier(formName) {
      this.editFormVisible = false;
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios
            .post("/admin/customer/save", qs.stringify(this.editedSupplier))
            .then(response => {
              console.log(response);
              const { data } = response;
              const { success } = data;
              if (success) {
                this.$message({
                  showClose: true,
                  message: "修改客户信息成功",
                  type: "success"
                });
                this.getCustomerList(this.currentPage, this.pageSize);
              } else {
                this.$message({
                  showClose: true,
                  message: "修改客户信息失败",
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

    getCustomerList(page, pageSize) {
      axios
        .post("/admin/customer/list", qs.stringify({ page, rows: pageSize }))
        .then(response => {
          console.log(response);
          const { data } = response;
          const { rows, total } = data;
          this.suppliers = rows;
          this.total = total;
        });
    },

    deleteCustomer(ids) {
      axios
        .post("/admin/customer/delete", qs.stringify({ ids }))
        .then(response => {
          console.log(response);
          const { data } = response;
          const { success } = data;
          if (success) {
            this.$message({
              showClose: true,
              message: "删除供应商成功",
              type: "success"
            });
            this.getCustomerList(this.currentPage, this.pageSize);
          } else {
            this.$message({
              showClose: true,
              message: "删除供应商失败",
              type: "error"
            });
          }
        })
        .finally(e => {
          console.error(e);
        });
    },

    searchSupplier(keyword) {
      axios
        .post("/admin/customer/comboList", qs.stringify({ q: keyword }))
        .then(response => {
          console.log(response);
          const { data } = response;
          this.suppliers = data;
          this.total = data.length;
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          this.querySupplierName = "";
        });
    },

    handleCurrentChange(val) {
      this.currentPage = +val;
      this.getSupplierList(this.currentPage, this.pageSize);
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    showWarnMsgBox() {
      if (this.multipleSelection.length === 0) {
        this.$alert("请先选择客户", "系统提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      }

      this.$confirm("此操作将永久删除客户信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const ids = this.multipleSelection.map(item => item.id).join(",");
          this.deleteCustomer(ids);
        })
        .catch(e => {
          console.log(e);
        });
    },

    showEditedSupplier() {
      if (this.multipleSelection.length !== 1) {
        this.$message({
          message: "请选择一个客户",
          type: "warning"
        });
        return;
      }
      let editedSupplier = this.multipleSelection.slice(0, 1)[0];
      this.editedSupplier = { ...editedSupplier };
      this.editFormVisible = true;
    }
  },

  computed: {
    // editedSupplier: function(){
    //   return this.multipleSelection === 1 ? this.multipleSelection.slice(0,1) : {}
    // }
  },

  mounted() {
    this.getCustomerList(this.currentPage, this.pageSize);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customer {
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

.pagination {
  margin-top: 20px;
  float: right;
}
</style>
