<template>
  <div class="log-wrapper">
    <ul ref="ul">
      <li v-for="item in lines">
        {{item}}
      </li>
    </ul>
    <a class="clear" @click="clear">clear</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lines: []
      }
    },
    methods: {
      log(line) {
        let $ul = this.$refs.ul
        this.lines.push(line)
        this.$nextTick(() => {
          $ul.scrollTop += 24
        })
      },
      clear () {
        this.lines = []
      }
    },
    events: {}
  }
</script>

<style scoped lang="scss">
  .log-wrapper {
    position: fixed;
    bottom: 5px;
    left: 5px;
    right: 5px;
    height: 300px;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 5px;
    overflow-y: scroll;
    ul, li {
      padding: 0 5px;
    }
    ul {
      height: 100%;
      overflow-y: scroll;
    }
    .clear {
      position: absolute;
      right: 5px;
      top: 5px;
      padding: 2px 4px;
      cursor: pointer;
      border: 1px solid #CCC;
      border-radius: 3px;
      background: #999;
      color: #FFF;
    }
  }
</style>
