<style lang="less" scoped>
  .content {
    overflow: auto;
    position: absolute;
    top: 50px;
    right: 0;
    bottom: 50px;
    left: 0;
    z-index: 100;
    // -webkit-overflow-scrolling : touch; 
  }
</style>
<template>
    <div class="content">
        <slot>aaaa</slot>
    </div>
</template>
<script>
export default{
  name:'content'
}
</script>