<template>
  <div class="su-fxFill flex-column" id="gisHeight">
    <div style="height:40px">

    </div>
    <div class="su-fxFlex" style="width:100%;height:100%" >
      <template>
        <el-table
          :height="a"
          border
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          style="width: 100%">
          <el-table-column
            type="selection"
            prop="id"
            width="55"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="wenjianbianhao"
            label="文件编号"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            sortable
            align="center">
          </el-table-column>
          <el-table-column
            prop="leibie"
            label="类别"
            align="center">
          </el-table-column>
          <el-table-column
            prop="danwei"
            label="所属单位"
            align="center">
          </el-table-column>
          <el-table-column
            prop="bumen"
            label="所属部门"
            align="center">
          </el-table-column>
          <el-table-column
            prop="zhuanye"
            label="专业"
            align="center">
          </el-table-column>
          <el-table-column
            prop="gouzhuwu"
            align="center"
            label="构建物">
          </el-table-column>
          <el-table-column
            prop="gdname"
            label="工点名称"
            align="center">
          </el-table-column>
          <el-table-column
            prop="licheng"
            label="里程信息"
            align="center">
          </el-table-column>
          <el-table-column
            prop="shangchuan"
            label="上传时间"
            align="center">
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div style="height:50px;line-height: 50px" class="flex-row">
      <div class="flex-split"></div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[15, 20]"
        :page-size="15"
        layout="sizes, prev, pager, next"
        :total="tabeltotal">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "gisbim",
      data(){
          return{
            tableData: [],
            a:'250px',
            currentPage:1,
            //table的总数
            tabeltotal:1000,
            pagesize:15
          }
      },
      created(){
        this.createdTable();
      },
      watch:{
        tabeltotal(val){
          console.log(val);
        }
      },
      methods:{
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        createdTable(){
          //初始化表格
          this.$http({
            url:'http://localhost:8080/static/data/data.json',
            type:'get',
          }).then(res =>{
                console.log(res);
            this.tableData=res.data.data;
            console.log( this.tableData.length);
             this.tabeltotal=this.tableData.length;
             console.log(this.tabeltotal,'====>');
          }).catch( err => {
             console.log(err);
          });
        },
        handleSizeChange(size){
          this.pagesize= size;
           console.log(size);
        },
        handleCurrentChange(currentpage){
          this.currentPage= currentpage;
        }
      }
    }
</script>

<style scoped>

</style>
