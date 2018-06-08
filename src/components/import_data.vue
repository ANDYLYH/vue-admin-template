<!-- import_data.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>

    <!-- Main content -->
    <section class="content">
      <div class="row">
      	<div class="col-lg-12 ">
      		<div class="box">
		      	<div class="box-header with-border">
		            <h3 class="box-title">数据导入</h3>
		        </div>
		      	<div class="box-body">
		      		<h4>点击按钮导入上下班数据</h4>
		            <a href="#" class="btn btn-primary uploaderBtn">
		                上传
		                <input type="file" value="浏览" />
		            </a>
		      	</div>
		      </div>
      	</div>
      </div>
    </section>
  </div>
</template>
<script>
  import contentHeader from './content_header'
  export default {
    data(){
      return {
        menuList: [{
            text: "数据管理",
            isActive: true
          },{
            text: "数据导入",
            isActive: false
          }],
      }
    },
    components:{
      contentHeader
    }
  }
</script>