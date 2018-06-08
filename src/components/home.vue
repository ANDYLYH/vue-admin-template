<template>
  <div class="content-wrapper">
    <!-- header -->
    <content-header v-bind:menuList="menuList"></content-header>
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
              <!-- <span id="test">内容头（搜索栏）</span> -->
              <form action="" class="form-inline">
                <!-- <div class="input-group" style="width:220px;">
                  <div class="input-group-addon">
                    <i class="fa fa-calendar"></i>
                  </div>
                  <input type="text" class="form-control pull-right" name="daterange" readonly="readonly">
                </div>
                <div class="form-group">
                  <label for="">姓名：</label>
                  <input type="text" class="form-control" placeholder="姓名">
                </div> -->
                <div class="form-group">
                  <label for="">姓名：</label>
                  <input type="text" class="form-control" placeholder="姓名">
                </div>
                <div class="form-group">
                  <button class="btn btn-primary ">
                    搜索
                  </button>
                </div>  
              </form>
            </div>
            <!-- /.box-header -->
            <div class="box-body" style="height: 200px">
                <span>内容主题</span>
            </div>
          </div>
          <!-- /.box -->
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
            text: "后台管理系统",
            isActive: true
          },{
            text: "主页",
            isActive: false
          }],
      }
    },
    components:{
      contentHeader
    }
  }
</script>
<style scoped>
  @import url(../css/test.css);
</style>