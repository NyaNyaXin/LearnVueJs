<template>
  <div>
  <h2>{{ msg }}</h2>
  <p>newsId:{{$route.params.newsId}}----newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Params page'
      }
    }
  }
</script>


