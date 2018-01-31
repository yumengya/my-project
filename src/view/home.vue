<template>
  <!--这是头部-->
  <el-container>
    <el-header style="height:85px;line-height:85px;padding:0px;">
      <cars-header></cars-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
            <el-menu
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"  router style="height:100%;">
     <!--   <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{ route.name}}</el-menu-item>-->
                  <el-menu-item index="/home/gis">GIS+BIM</el-menu-item>
                  <el-menu-item index="/home/designDelivery">设计交付</el-menu-item>
                  <el-menu-item index="/home/taizhang">台账</el-menu-item>
                  <el-menu-item index="/home/product_list">产品清单(BBS)</el-menu-item>
                  <el-menu-item index="1-1">WBS实列化</el-menu-item>
                  <el-menu-item index="1-2">WBS模板 </el-menu-item>
                  <el-menu-item index="1-1">安全管理</el-menu-item>
                  <el-menu-item index="1-2">质量管理</el-menu-item>
            </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import header from './header';
    export default {
        name: "home",
      data(){
          return{

          }
      },
      created(){
      },
      components:{
          'cars-header':header
      }
    }
</script>

<style scoped>

</style>
