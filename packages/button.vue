<template>
  <button class="t-botton" :class="[`t-button__${type}`, {
    round
  }]" @click="hangleClick">
    <span class="row" :class="[`t-icon__${align}`]">
      <span class="icon iconfont icon-loading paddingRL"></span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 't-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    round: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  methods: {
    hangleClick(e) {
      this.$emit('onClick', e);
    },
  },
};
</script>

<style scoped>
  .t-botton{
    width: 100%;
    height: 44px;
    display: inline-block;
    border: none;
    background: #4499DD;
    color: #fff;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    outline: none;
    white-space: nowrap;
    line-height: 1;
  }

  .t-botton:active{
    opacity: .3;
  }

  .row{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .paddingRL{
    padding-right: 5px;
  }

  .t-button__default{
    background: none;
    border: 1px solid #4499DD;
    color: #4499DD;
  }

  .t-button__primary{
    background: #4499DD;
    border: 1px solid #4499DD;
    color: #fff;
  }

  .round{
    border-radius: 22px;
  }

  .t-icon__left {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .t-icon__right{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
  }

</style>
