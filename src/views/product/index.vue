<template>
  <div>
    <div style="display: flex; align-items: center; margin-bottom: 10px;margin-top: 10px;margin-left: 10px;">
      <el-button v-if="showButton == true" type="primary" @click="showAddProductDialog" style="margin-left: 10px;">添加产品</el-button>
    </div>

    <!-- 显示产品的表格 -->
    <el-table :data="products" style="width: 100%;margin-left: 10px;">
      <el-table-column prop="spuName" label="Product Name" />
      <el-table-column prop="spuDescription" label="Description" />
      <el-table-column prop="weight" label="Price" />
      <el-table-column prop="updateTime" label="Time" />
    </el-table>

    <!-- 弹出的添加新产品对话框 -->
    <el-dialog title="Add Product" :visible.sync="addProductDialogVisible" width="30%" @close="fetchProducts">
      <el-form :model="newProductForm" label-width="80px">
        <el-form-item label="Product Name" prop="spuName">
          <el-input v-model="newProductForm.spuName" />
        </el-form-item>
        <el-form-item label="Description" prop="spuDescription">
          <el-input v-model="newProductForm.spuDescription" />
        </el-form-item>
        <el-form-item label="Price" prop="weight">
          <el-input v-model="newProductForm.weight" />
        </el-form-item>
        <el-form-item label="Time" prop="updateTime">
          <el-input v-model="newProductForm.updateTime" />
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
import { getProductList,addProduct } from '@/api/product'
export default {
  data() {
    return {
      products: [],
      newProductForm: {
        spuName: '',
        spuDescription: '',
        weight: null,
        updateTime: null,
        creatTtime: '',
        publishStatus: 1,
        seller_id: 1
      },
      newProductForm2: {
        spuName: '',
        spuDescription: '',
        weight: null,
        updateTime: null,
        creatTtime: '',
        publishStatus: 1,
        seller_id: 1
      },
      addProductDialogVisible: false,
      userName:'',
      showButton:false,
    };
  },
  created() {
    this.userName = this.$store.getters.name;
    console.log("获取名字：", this.userName)
    this.showAddButton();
    this.fetchProducts();
  },
  methods: {
    //是否展示添加产品按钮
    showAddButton(){
      if(this.userName == "admin"){
        this.showButton = true;
      }
    },
    //获取产品列表
    fetchProducts() {
      getProductList().then(res => {
        this.products = res.data;
        console.log('产品数据：',res.data)
      })
        .catch(error => {
          console.error(error);
        });
  },
  showAddProductDialog() {
    // 点击“添加产品”按钮时显示对话框
    this.addProductDialogVisible = true;
  },
  //admin有权限添加产品
  addProduct() {
    this.newProductForm2 ={
        spuName: this.newProductForm.spuName,
        spuDescription: this.newProductForm.spuDescription,
        weight: parseFloat(this.newProductForm.weight),
        creatTtime: this.newProductForm.creatTtime,
        // publishStatus: 1,
        seller_id: 1
    };
    addProduct(this.newProductForm2).then(res => {
        console.log('添加新产品成功：',res.data)
      })
        .catch(error => {
          console.error(error);
        });

    // 添加产品后重置表单和关闭对话框
    this.fetchProducts();
    this.addProductDialogVisible = false;
  }
}
};
</script>
