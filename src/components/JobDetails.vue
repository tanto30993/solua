<template>
    <div>
<h1>Job Details</h1>
<p> day la id {{id}}</p>

    </div>
</template>
<script>
export default{
    data(){
  return{
    jobs:[]
  }
}, 
    props:['id'],
    mounted(){
  fetch('http://localhost:3000/jobs/' + this.id)
  .then(res => res.json())
  .then(data => this.jobs = data)
  .catch(err => console.log(err.message))
}
}
</script>
<style></style>