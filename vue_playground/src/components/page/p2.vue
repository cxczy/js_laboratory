<template>
  <div>
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script>
  export default {
    name: 'p2',
    data() {
      return {
        $canvas: '',
        $ctx: '',
        map: [
          [0, 0, 0, 0],
          [2, 0, 0, 0],
          [0, 0, 0, 4],
          [8, 0, 0, 0]
        ],
        sum: 0
      }
    },
    mounted() {
      this.$canvas = this.$refs.canvas
      this.$ctx = this.$canvas.getContext('2d')
      this.init()
    },
    methods: {
      init() {
        this.drawStage(this.map)
        this.bindKeys()
      },
      drawStage(map) {
//        log(this.$ctx)
        for (let i = 0; i < map.length; i++) {
          for (let j = 0; j < map[i].length; j++) {
            this.$ctx.strokeRect(i * 100, j * 100, (i + 1) * 100, (j + 1) * 100)
            this.$ctx.font = "20px serif"
            this.$ctx.strokeText(map[j][i], i * 100 + 45, j * 100 + 55)
          }
        }

      },
      bindKeys() {
        window.addEventListener('keyup', e => {
          var direction = e.key.toLocaleLowerCase().slice(5)
          this.handleDirection(direction)
        })
      },
      handleDirection(d) {
        log(d)
        //todo: get sum in given direction

        //gen new random num in a block
        this.genRandom()
      },
      genRandom(){
        //todo: choose a random blank block and put a num onto it
      }
    }

  }
</script>

<style scoped>
  canvas {
    border: 1px solid #7e8c8d;
  }
</style>
