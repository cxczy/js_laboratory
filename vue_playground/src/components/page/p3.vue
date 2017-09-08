<template>
  <div>
    <div class="control">
      <input type="range" v-model="ceil" @change="play"> {{ceil}}
    </div>
    <div class="visualizer">
      <div>

      </div>
    </div>
  </div>
</template>

<script>
  import {quickSort} from '@/utils/sort'
  import _ from 'lodash'
  export default {
    data () {
      return {
        ceil: 10,
        arr_quick: []
      }
    },
    mounted () {
      this.play()
    },
    methods: {
      play() {
        this.genRandomArrs(this.ceil)
        this.qSort(this.arr_quick)

      },
      genRandomArrs(ceil) {
        var arr = [];
        for (var i = 0; i < ceil; i++) {
          arr.push(i)
        }
        this.arr_quick = _.shuffle(arr)
      },
      qSort(arr) {
        return new Promise((resolve, reject) => {
          if (arr.length <= 1) {
            arr.length === 1 && log(arr[0])
            return
          }
          var pivotIndex = Math.floor(arr.length / 2);
          var pivot = arr.splice(pivotIndex, 1)[0];
          log(pivot)
          var left = [];
          var right = [];
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
              left.push(arr[i]);
            } else {
              right.push(arr[i]);
            }
          }
          setTimeout(() => {
            resolve([].concat.call(this.qSort(left), [pivot], this.qSort(right)))
          }, 100)
        })
      }
    }
  }
</script>
