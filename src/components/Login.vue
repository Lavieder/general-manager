<template>
  <h2>Login</h2>
  <router-link to="/he">回HelloWord</router-link>
</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      this.$storage.setItem("userInfo", {
        name: 'nnfd',
        age: 15
      })
      console.log('==>', this.$storage.getItem("userInfo"))
      this.$storage.clearItem("userInfo")
        // this.$request({
        //   method: 'get',
        //   url: '/login',
        //   data: {
        //     name:'jack'
        //   }
        // }).then((res)=>{
        //   console.log(res)
        // })
        // this.$request.get('/login',{name:'jack'},{mock:true, loading: true}).then(res=>{
        //   console.log(res)
        // })
    }
  }
</script>

<style scoped>

</style>