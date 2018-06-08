<template>
	 <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">后台管理系统</li>
          <li class="active">
            <router-link :to="{ path:'/' }">
              <i class="glyphicon glyphicon-home"></i> <span>主页</span>
            </router-link>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-files-o"></i>
              <span>考勤管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small>-->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="attendance"><i class="fa fa-circle-o"></i>我的考勤记录</router-link></li>
              <li><router-link to="leave_record"><i class="fa fa-circle-o"></i>调休使用记录</router-link></li>
            </ul>
          </li>
          <!-- 一级菜单 -->
          <li class="treeview">
            <a href="#">
              <i class="fa fa-th"></i> <span>加班管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <!-- 二级菜单 -->
            <ul class="treeview-menu">
                <li class="treeview">
                  <a href="#">
                    <i class="fa fa-circle-o"></i> <span>记录</span>
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                      <!-- <small class="label pull-right bg-green">new</small> -->
                    </span>
                  </a>
                  <!-- 三级菜单 -->
                  <ul class="treeview-menu">
                    <li><router-link :to="{name:'overtime_record'}"><i class="fa fa-circle-o"></i> 加班记录</router-link></li>
                  </ul>
                <!-- <router-link :to="{name:'overtime_record'}"><i class="fa fa-circle-o"></i> 加班记录</router-link> -->
              </li>
              <li><router-link to="overtime_petitioner"><i class="fa fa-circle-o"></i> 加班申请</router-link></li>
              <li><router-link to="overtime_pass"><i class="fa fa-circle-o"></i> 加班审批</router-link></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i> <span>数据管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="import_data"><i class="fa fa-circle-o"></i> 导入数据</router-link></li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
</template>