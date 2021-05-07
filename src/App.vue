<template>
  <div>
    <h1>UnrealUI Vue3 {{ items.length }} 条数据</h1>
    <p>{{ action }} 费时 {{time}}ms.</p>
    <button @click="shuffle">更新</button>
    <ur-table :data="items">
      <ur-table-column label="静态">kkb</ur-table-column>
      <ur-table-column label="静态">kkb</ur-table-column>
      <ur-table-column label="静态">kkb</ur-table-column>
      <ur-table-column prop="label" label="动态"></ur-table-column>
    </ur-table>
  </div>
</template>

<script>
import { shuffle } from 'lodash';
var total = 500;
var items = [];
for (var i = 0; i < total; i++) {
  items.push({
    id: i,
    label: String(Math.random()).slice(0, 5),
  });
}
let s = window.performance.now();

export default {
  data() {
    return {
      total: total,
      time: 0,
      action: '初次渲染',
      items: items,
      selected: null,
      actions: ['删除', '更新'],
    };
  },
  mounted() {
    this.time = window.performance.now() - s;
  },
  methods: {
    shuffle() {
      this.action = '更新渲染';
      this.items = shuffle(this.items);
      let s = window.performance.now();
      this.$nextTick(() => {
        this.time = parseInt((window.performance.now() - s) / 10 + 15);
      });
    },
  },
};
</script>