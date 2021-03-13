<template>
  <nav>
    <h3>旅程導覽</h3>開始
    <transition-group name="flip-list" tag="div">
      <div
        @click="toOffest(item)"
        @dragstart="dragStart($event, index)"
        @drop="drop($event, index)"
        @dragover="allowDrop"
        draggable="true"
        v-for="(item,index) in testData"
        :key="item"
        class="fixbox"
      >{{item}}</div>
    </transition-group>結束
  </nav>

  <main>
    <h1 style="font-size:30px">標籤</h1>
    <h2 style="font-size:20px">當會員觸發標籤時，開始旅程</h2>
    <div ref="tagInput" @click="inputDiv.focus()" class="tagInput">
      <div ref="tagWrap" class="wrap">
        <div class="tags" v-for="(item,index) in testData" :key="index">
          {{item}}
          <span @click="delTag(index)">X</span>
        </div>
      </div>
      <input
        placeholder="請開始安排"
        ref="inputDiv"
        v-model="selectOption"
        @input="addArray(selectOption)"
        type="text"
        list="data"
      />
      <datalist id="data">
        <option v-if="data.length!==0" value="請選擇"></option>
        <option v-else value="沒有選項囉"></option>
        <option v-for="(item) in data" :key="item" :value="item" />
      </datalist>
    </div>
  </main>
  <transition-group name="flip-list" tag="div">
    <div :ref="setItemRef" :id="item" class="test" v-for="item in testData" :key="item">{{item}}</div>
  </transition-group>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup () {
    const box = ref()
    const inputDiv = ref()
    const selectOption = ref()
    const testData = reactive([])
    const tagWrap = ref()
    const tagInput = ref()
    const itemRef = ref([])
    const data = reactive(
      ['tom', 'good', 'blue', 'red']
    )
    const delTag = (index) => {
      const cut = testData.splice(index, 1)
      data.push(cut[0])
    }
    const addArray = (selectOption) => {
      if (!selectOption) return
      for (let i = 0; i < data.length; i++) {
        if (data[i] === selectOption) {
          testData.push(selectOption)
          data.splice(i, 1)
          return
        }
      }
    }
    const setItemRef = (el) => {
      itemRef.value.push(el)
    }
    const dragStart = (e, index) => {
      // drag專用保存拖曳資料
      e.dataTransfer.setData('Text', index)
    }
    const allowDrop = (e) => {
      e.preventDefault()
    }
    const drop = (e, index) => {
      allowDrop(e)
      // 取消默認行為
      const dragIndex = e.dataTransfer.getData('Text')
      // testData.splice(dragIndex, 1)
      const cut = testData.splice(dragIndex, 1)
      // console.log('cut:', cut, '拖到哪:', index)
      testData.splice(index, 0, cut[0])
    }
    const toOffest = (item) => {
      // window.scrollTo(itemRef[index].value.offsetTop)

      for (let i = 0; i <= itemRef.value.length; i++) {
        if (itemRef.value[i].id === item) {
          window.scrollTo({ top: itemRef.value[i].offsetTop, behavior: 'smooth' })
        }
      }
    }
    return {
      allowDrop,
      selectOption,
      box,
      data,
      addArray,
      testData,
      inputDiv,
      delTag,
      tagWrap,
      tagInput,
      dragStart,
      drop,
      setItemRef,
      toOffest
    }
  }
})
</script>
<style lang="scss">
.flip-list-move {
  transition: transform 0.8s ease;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
}
main {
  width: 300px;
  text-align: center;
  border: 2px solid rgb(165, 165, 228);
  align-items: center;
  margin: 15px auto;
  .tagInput {
    align-items: center;
    border: 1px solid gray;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    width: 80%;
    margin-bottom: 15px;
    align-items: center;
    .wrap {
      display: flex;
      flex-wrap: wrap;
      .tags {
        // display: flex;
        text-align: left;
        margin-right: 2px;
        width: 50px;
        background-color: rgb(226, 222, 222);
        span {
          right: 0px;
          cursor: pointer;
        }
      }
    }
    input {
      flex: 1;
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
}
.test {
  width: 300px;
  text-align: center;
  height: 300px;
  display: flex;
  border: 2px solid rgb(165, 165, 228);
  margin: 30px auto;
  justify-content: center;
  align-items: center;
}
nav {
  border: 1px solid #ccc;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-top: 150px;
  margin-left: 50px;
  .fixbox {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    left: -5px;
    color: blue;
    border: 2px solid rgb(165, 165, 228);
    width: 50px;
    align-items: center;
    height: 50px;
    margin-bottom: 5px;
  }
}
</style>
