<template>
  <div>
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="name" label="Product Name" />
      <el-table-column prop="description" label="Description" />
      <el-table-column prop="price" label="Price" />
      <el-table-column prop="stock" label="Stock" />
    </el-table>
  </div>
</template>

<script>
// import { getProductList } from '@/api/product'
export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    // 在组件创建时获取产品数据
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      // getProductList().then(res => {
      //     // this.products = res.data;
      //     console.log('产品数据：',res,res.data)
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    // }

      //     fetchProducts() {
      //   return new Promise((resolve, reject) => {
      //     getProductList().then(response => {
      //       const { data } = response
      //       console.log("获取产品数据：",data)
      //       resolve()
      //     }).catch(error => {
      //       reject(error)
      //     })
      //   })
      // },

      // 使用示例数据来模拟获取的产品数据
      this.products = [
        { name: 'Product 1', description: 'Description 1', price: 10.99, stock: 100 },
        { name: 'Product 2', description: 'Description 2', price: 19.99, stock: 50 },
        { name: 'Product 3', description: 'Description 3', price: 5.99, stock: 200 },
        { name: 'Product 4', description: 'Description 4', price: 77.29, stock: 20 },
        { name: 'Product 5', description: 'Description 5', price: 20.56, stock: 455 },
        { name: 'Product 6', description: 'Description 6', price: 11.08, stock: 48 },
        { name: 'Product 7', description: 'Description 7', price: 2.88, stock: 356 },
        { name: 'Product 5', description: 'Description 5', price: 20.56, stock: 455 },
        { name: 'Product 6', description: 'Description 6', price: 11.08, stock: 48 },
        { name: 'Product 7', description: 'Description 7', price: 2.88, stock: 352 },
        { name: 'Product 8', description: 'Description 8', price: 11.08, stock: 108 },
        { name: 'Product 9', description: 'Description 9', price: 2.88, stock: 36 }
        // Add more product data here
      ]
    }
  }
}
</script>
