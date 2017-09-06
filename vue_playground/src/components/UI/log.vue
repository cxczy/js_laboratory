<template>
  <div class="log-wrapper" :style="stylePos">
    <div class="border border-bt" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd"></div>
    <div class="border border-bl" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd"></div>
    <div class="border border-br"></div>
    <div class="border border-bb"></div>
    <ul ref="ul">
      <li v-for="item in lines">
        {{item}}
      </li>
    </ul>
    <a class="clear" @click="clear">clear</a>
    <a class="move border-bc" draggable="true" @dragstart="handleDragStart" @dragend="handleDragEnd">+</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pos: {
          height: 300,
          width: 600,
          right: 5,
          bottom: 5
        },
        dragData: {
          start: {
            x: '',
            y: ''
          },
          end: {
            x: '',
            y: ''
          }
        },
        lines: []
      }
    },
    computed: {
      stylePos () {
        return {
          height: this.pos.height + 'px',
          width: this.pos.width + 'px',
          right: this.pos.right + 'px',
          bottom: this.pos.bottom + 'px'
        }
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
      },
      handleDragStart(e) {
        this.dragData.start.x = e.x
        this.dragData.start.y = e.y
      },
      handleDragEnd(e) {
        var side = e.target.classList[1].slice(-1);
        this.dragData.end.x = e.x
        this.dragData.end.y = e.y
        var offsetY = this.dragData.end.y - this.dragData.start.y
        var offsetX = this.dragData.end.x - this.dragData.start.x
        switch (side) {
          case 't':
            this.pos.height -= offsetY;
            break;
          case 'l':
            this.pos.width -= offsetX;
            break;
          case 'c':
            this.pos.bottom -= offsetY;
            this.pos.right -= offsetX;
            break;
        }
      }
    },
    events: {}
  }
</script>

<style scoped lang="scss">
  .log-wrapper {
    position: absolute;
    height: 300px;
    box-sizing: border-box;
    padding: 5px;
    z-index: 10;
    ul, li {
      padding: 0 5px;
    }
    ul {
      height: 100%;
      overflow-y: scroll;
    }
    .clear {
      position: absolute;
      right:18px;
      top: 8px;
      padding: 2px 4px;
      cursor: pointer;
      border: 1px solid #CCC;
      border-radius: 3px;
      background: #999;
      color: #FFF;
    }
    .move {
      position: absolute;
      right: 15px;
      bottom: 05px;
      padding: 2px 6px;
      cursor: move;
      border: 1px solid #CCC;
      border-radius: 3px;
      background: #999;
      color: #FFF;
      z-index:1002;
    }
    .border {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 2px solid #999;
      z-index: 100;
      &-bt {
        bottom: initial;
        cursor: row-resize;
      }
      &-br {
        left: initial;
      }
      &-bb {
        top: initial;
      }
      &-bl {
        right: initial;
        cursor: col-resize;
      }
    }
  }
</style>
