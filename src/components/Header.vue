<template>
  <div class="header">
    <div class="avatar" @click="$router.push('sign')"><img class="avatar-img" src="../assets/avatar.jpg" alt="User's avatar" title="User's name"></div>
    <div class="search">
      <div class="search-box">
        <span class="search-box-icon"><icon-svg icon-class="search"></icon-svg></span>
        <input class="search-box-input" type="text" placeholder="Search">
        <span class="search-box-border"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 40px;
}
.search {
  margin: auto;
  padding-right: 112px;
  max-width: 800px;
  &-box {
    border-bottom: 1px solid #ccc;
    display: flex;
    height: 32px;
    margin: 23px 70px 23px 50px;
    position: relative;
    transition: all .3s ease;
    &-icon {
      height: 24px;
      margin: 4px 16px 4px 0;
      width: 24px;
      & svg {
        height: 20px;
        width: 20px;
      }
    }
    &-input {
      border: none;
      color: #555;
      flex: 1;
      font-size: 14px;
      line-height: 32px;
      outline: none;
      &:focus { border-color: #ff6e03; }
      &:focus + .search-box-border { transform: scaleX(1); }
    }
    &-border {
      background: #ff6e03;
      bottom: -1px;
      height: 1px;
      left: 0%;
      position: absolute;
      transform: scaleX(0);
      transition: all .5s ease;
      width: 100%;
      z-index: 1;
    }
    &:hover { border-color: #aaa; }
  }
}
.avatar {
  float: right;
  &-img {
    border-radius: 20px;
    margin: 18px auto;
    width: 40px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
