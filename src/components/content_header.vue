<!-- content_header.vue -->
<template>
	<div class="content-header">
		<ol class="breadcrumb">
			<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">{{i.text}}</li>
			<!-- <li class="active">异常考勤记录</li> -->
		</ol>
		<!-- <h1>
			<small>{{v}}</small>
			{{title}}
			
		</h1> -->
		
	</div>
</template>
<script>
export default {
  name: 'content_header',
  data(){
  	return {
  		title:"后台管理系统",
  		v:"Version 1.0"
  	}
  },
  props: ['menuList']
}
</script>