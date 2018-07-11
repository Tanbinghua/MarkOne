<template>
  <div class="header">
    <div class="search"><input class="search-input" type="text" placeholder="search"></div>
    <div class="avatar"><img class="avatar-img" src="../assets/avatar.jpg" alt="User's avatar" title="User's name"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  line-height: 80px;
  justify-content: space-around;
}
.search {
  &-input {
    border: 1px solid #ccc;
    border-radius: 3px;
    line-height: 32px;
    outline: none;
    padding-left: 20px;
    transition: all .4s ease;
    width: 710px;
    &:hover { border-color: #aaa; }
    &:focus { border-color: #ff6e03; }
  }
}
.avatar {
  &-img {
    border-radius: 24px;
    vertical-align: middle;
    width: 48px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
