<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 10px;margin-top: 10px;margin-left: 10px;">
      <el-button type="primary" @click="showAddProductDialog" style="margin-left: 10px;">添加产品</el-button>
    </div>

    <!-- 显示产品的表格 -->
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="产品名称" />
      <el-table-column prop="description" label="描述" />
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="stock" label="库存" />
    </el-table>

    <!-- 弹出的添加新产品对话框 -->
    <el-dialog
      title="添加新产品"
      :visible.sync="addProductDialogVisible"
      width="30%"
      @close="resetNewProductForm"
    >
      <el-form :model="newProductForm" label-width="80px">
        <el-form-item label="产品名称" prop="name">
          <el-input v-model="newProductForm.name" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input v-model="newProductForm.description" />
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="newProductForm.price" />
        </el-form-item>
        <el-form-item label="库存" prop="stock">
          <el-input v-model="newProductForm.stock" />
        </el-form-item>
      </el-form>

      <!-- 新增确定按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addProduct">确定</el-button>
        <el-button @click="addProductDialogVisible = false">取消</el-button>
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
    };
  },
  methods: {
    showAddProductDialog() {
      // 点击“添加产品”按钮时显示对话框
      this.addProductDialogVisible = true;
    },
    addProduct() {
      console.log("token:",this.$store.getters.token)
      // 向产品数组中添加新产品
      this.products.push({ ...this.newProductForm });
      // 可选：在这里将新产品数据发送到后端/API

      // 添加产品后重置表单和关闭对话框
      this.resetNewProductForm();
      this.addProductDialogVisible = false;
    },
    resetNewProductForm() {
      // 重置新产品表单
      this.newProductForm = {
        name: '',
        description: '',
        price: null,
        stock: null
      };
    }
  }
};
</script>
