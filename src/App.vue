<template>
<div class="omai">
  <div>
  <div class="" >
   <div>
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <div class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Trang Chủ</a>
        </li>
        <div class="nav-item">
         <router-link to="/menusp" class="nav-link">Sản Phẩm</router-link>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="/navcontact">Liên Hệ</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="/navcart">Giỏ Hàng</a>
        </div>
        <div class="nav-item">
          <a class="nav-link" href="/navform">Đăng Nhập</a>
        </div>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </div>
  </div>
  
  </div>
  <router-view></router-view>
</div>
</template>

<script>


export default {
  name: 'App',
  components: {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.card{
  margin-top: 20px ;
  margin-bottom:20px ;
}
.dong1,.dong2{
  margin-left: 30px ;
}

</style>
