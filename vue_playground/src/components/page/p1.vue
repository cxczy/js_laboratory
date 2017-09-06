<template>
  <div class="page-wrapper">
    <h2>Event Emitter Example</h2>
    <div class="box">
      <div>
        <button type="button" class="btn btn-example" @click="emit('trigger', param1, param2)">一个Button</button>
        <label for="">param1</label>:
        <input type="text" v-model="param1">
        <label for="">param2</label>:
        <input type="text" v-model="param2">
      </div>
    </div>
    <div class="box">
      <button type="button" class="btn btn-example" @click="bind('trigger', foo)">绑定一个事件foo</button>
      <button type="button" class="btn btn-example" @click="bind('trigger', bar)">绑定一个事件bar</button>
      <button type="button" class="btn btn-example" @click="once('trigger', baz)">绑定一个一次性事件baz</button>
    </div>
    <div class="box">
      <button type="button" class="btn btn-example" @click="unbind('trigger', foo)">解除绑定trigger事件回调函数foo</button>
      <button type="button" class="btn btn-example" @click="unbind('trigger', bar)">解除绑定trigger事件回调函数bar</button>
      <button type="button" class="btn btn-example" @click="unbind('trigger', baz)">解除绑定trigger事件回调函数baz</button>
      <button type="button" class="btn btn-example" @click="unbind('trigger')">解除trigger事件全部回调函数</button>
    </div>

    <my-log ref="log"></my-log>

  </div>
</template>

<script>
  import {EventEmitter} from '../../utils/event'
  import myLog from '../UI/log'

  export default {
    name: 'p1',
    data () {
      return {
        param1: '',
        param2: '',
        Bus: ''
      }
    },
    mounted () {
      this.log("控制台初始化成功...")
      this.Bus = new EventEmitter()
    },
    methods: {
      log (e) {
        this.$refs.log.log(e)
      },
      bind (ev, fn) {
        this.Bus.on(ev, fn)
      },
      once (ev, fn) {
        this.Bus.once(ev, fn)
      },
      unbind (ev, fn = null) {
        fn ? this.Bus.off(ev, fn) : this.Bus.off(ev)
      },
      emit (fn, ...args) {
        this.log('点击了按钮..')
        this.Bus.fire(fn, ...args)
      },
      foo (...args) {
        this.log('foo被调用，参数是' + args)
      },
      bar (...args) {
        this.log('bar被调用，参数是' + args)
      },
      baz (...args) {
        this.log('baz被调用，参数是' + args)
      }
    },
    components: {
      myLog
    }
  }
</script>

<style scoped lang="scss">
  .page-wrapper {
    padding: 5px;
  }

  .btn {
    padding: 10px 20px;
    margin: 0 5px;
    line-height: 1;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 4px;
    background: #687bff;
    cursor: pointer;
    font-size: 14px;
    &:active {
      background: #5168ff;
    }
  }

  .box {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 0;
    * {
      font-size: 14px;
    }
    input {
      height: 30px;
      line-height: 1;
      width: 100px;
      border: 1px solid #CCC;
    }
  }
</style>
