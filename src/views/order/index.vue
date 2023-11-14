<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 10px;margin-top: 10px;margin-left: 10px;">
      <el-button type="primary" style="margin-left: 10px;" @click="showAddProductDialog">Buy Product</el-button>
    </div>

    <!-- 显示产品的表格 -->
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="description" label="Description" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="stock" label="Inventory" />
    </el-table>

    <!-- 弹出的添加新产品对话框 -->
    <el-dialog
      title="Buy Product"
      :visible.sync="addProductDialogVisible"
      width="30%"
      @close="resetNewProductForm"
    >
      <el-form :model="newProductForm" label-width="80px">
        <el-form-item label="ID" prop="id">
          <el-input v-model="newProductForm.name" />
        </el-form-item>
        <el-form-item label="Quantity" prop="Quantity">
          <el-input v-model="newProductForm.description" />
        </el-form-item>
      </el-form>

      <!-- 新增确定按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addProduct">Submit</el-button>
        <el-button @click="addProductDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [/* 你的产品数据 */],
      newProductForm: {
        name: '',
        description: '',
        price: null,
        stock: null
      },
      addProductDialogVisible: false
    }
  },
  methods: {
    showAddProductDialog() {
      // 点击“添加产品”按钮时显示对话框
      this.addProductDialogVisible = true
    },
    addProduct() {
      console.log('token:', this.$store.getters.token)
      // 向产品数组中添加新产品
      this.products.push({ ...this.newProductForm })
      // 可选：在这里将新产品数据发送到后端/API

      // 添加产品后重置表单和关闭对话框
      this.resetNewProductForm()
      this.addProductDialogVisible = false
    },
    resetNewProductForm() {
      // 重置新产品表单
      this.newProductForm = {
        name: '',
        description: '',
        price: null,
        stock: null
      }
    }
  }
}
</script>
