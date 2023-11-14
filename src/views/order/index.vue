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

    <!-- 弹出的购买产品对话框 -->
    <el-dialog
      title="Buy Product"
      :visible.sync="buyProductDialogVisible"
      width="30%"
      @close="resetBuyProductForm"
    >
      <el-form :model="newProductForm" label-width="80px">
        <el-form-item label="ID" prop="productId">
          <el-input v-model="newProductForm.productId" />
        </el-form-item>
        <el-form-item label="Quantity" prop="quantity">
          <el-input v-model="newProductForm.quantity" />
        </el-form-item>
      </el-form>

      <!-- 新增确定按钮 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="buyProduct">Submit</el-button>
        <el-button @click="buyProductDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>

    <!-- 弹出的订单信息对话框 -->
    <el-dialog
      title="Buy Product Success!"
      :visible.sync="orderDialogVisible"
      width="50%"
    >
      <p><strong>Order Details</strong></p>
      <div v-if="Object.keys(orderDetails).length > 0">
        <p><strong>Member Username:</strong> {{ orderDetails.memberUsername }}</p>
        <p><strong>Order Time:</strong> {{ orderDetails.createTime }}</p>
        <p><strong>Receiver City:</strong> {{ orderDetails.receiverCity }}</p>
      </div>
      <template v-else>
        <p>No order details available.</p>
      </template>

      <span slot="footer" class="dialog-footer">
        <el-button @click="orderDialogVisible = false">Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getProductList } from '@/api/product'
import { buyProduct } from '@/api/order'

export default {
  data() {
    return {
      products: [],
      newProductForm: {
        productId: '',
        quantity: null
      },
      buyProductDialogVisible: false,
      orderDialogVisible: false,
      orderDetails: {}
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
      console.log('token:', this.newProductForm)
      // 向产品数组中添加新产品
      // 在这里将新产品数据发送到后端/API
      return new Promise((resolve, reject) => {
        buyProduct({ productId: this.newProductForm.productId, quantity: this.newProductForm.quantity }).then(response => {
          this.resetBuyProductForm()
          this.buyProductDialogVisible = false
          this.showOrderDialog(response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    showOrderDialog(order) {
      console.log(order)
      this.orderDetails = order
      this.orderDialogVisible = true
    },
    resetBuyProductForm() {
      // 重置新产品表单
      this.newProductForm = {
        productId: '',
        quantity: null
      }
    }
  }
}
</script>
