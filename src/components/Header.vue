<template>
  <div class="header">
    <div class="search">
      <div class="search-box">
        <span class="search-box-icon"></span>
        <input class="search-box-input" type="text" placeholder="search">
        <span class="search-box-border"></span>
      </div>
    </div>
    <div class="avatar"><img class="avatar-img" src="../assets/avatar.jpg" alt="User's avatar" title="User's name"></div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
}
.search {
  margin-right: 11%;
  width: 50%;
  &-box {
    border-bottom: 1px solid #ccc;
    display: flex;
    height: 32px;
    margin: 24px auto;
    position: relative;
    &-icon {
      background: #ccc;
      height: 24px;
      margin: 4px auto;
      width: 24px;
    }
    &-input {
      border: none;
      flex: 1;
      line-height: 32px;
      outline: none;
      transition: all .3s ease;
      &:hover { border-color: #aaa; }
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
  }
}
.avatar {
  &-img {
    border-radius: 24px;
    margin: 14px auto;
    width: 48px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
