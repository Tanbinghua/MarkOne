<template>
  <div class="box">
    <input class="my-search" type="text" placeholder="search">
    <span class="hello"></span>
  </div>
</template>

<style scpoed>
.box {
  position: relative;
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  cursor: pointer;
  color: #333;
  text-align: center;
  background: #eee;
}

.hello {
  content: "";
  position: absolute;
  left: 0%;
  bottom: 0;
  width: 200px;
  transform: scaleX(0);
  height: 2px;
  background: deeppink;
  z-index: 1;
  transition: all .5s;
}

.my-search:focus + .hello {
  transform: scaleX(1);
}

.my-search {
  width: 100%;
  height: 80%;
  border: none;
  outline: none;
}
</style>
