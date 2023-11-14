<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 10px;margin-top: 10px;margin-left: 10px;">
      <el-button type="primary" style="margin-left: 10px;" @click="showBuyProductDialog">Buy Product</el-button>
    </div>

    <!-- 显示产品的表格 -->
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="id" label="ID" />
      <el-table-column prop="spuName" label="Name" />
      <el-table-column prop="spuDescription" label="Description" />
      <el-table-column prop="weight" label="Price" />
    </el-table>

    <!-- 弹出的添加新产品对话框 -->
    <el-dialog
      title="Buy Product"
      :visible.sync="buyProductDialogVisible"
      width="30%"
      @close="resetBuyProductForm"
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
        <el-button @click="buyProduct">Submit</el-button>
        <el-button @click="buyProductDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getProductList } from '@/api/product'

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
      buyProductDialogVisible: false
    }
  },
  created() {
    this.getProductList()
  },
  methods: {
    getProductList() {
      return new Promise((resolve, reject) => {
        getProductList().then(response => {
          console.log(response)
          this.products = response.data
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    showBuyProductDialog() {
      // 点击“buy product”按钮时显示对话框
      this.buyProductDialogVisible = true
    },
    buyProduct() {
      console.log('token:', this.$store.getters.token)
      // 向产品数组中添加新产品
      this.products.push({ ...this.newProductForm })
      // 可选：在这里将新产品数据发送到后端/API

      // 添加产品后重置表单和关闭对话框
      this.resetBuyProductForm()
      this.buyProductDialogVisible = false
    },
    resetBuyProductForm() {
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
