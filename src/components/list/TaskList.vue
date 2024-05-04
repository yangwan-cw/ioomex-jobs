<template>
  <div
    class="task-item"
    v-for="(item, index) in taskList"
    :key="index"
    @click="gotoDetail(item.id)"
  >
    <div class="task-item-top">
      <h3>移动端小程序前端开发</h3>
      <span>紧急</span>
    </div>
    <dl>
      <dt>
        <h5>任务预算</h5>
        <strong>￥1000</strong>
      </dt>
      <dt>
        <h5>任务周期</h5>
        <strong>90天</strong>
      </dt>
      <dt>
        <h5>服务方式</h5>
        <strong>驻场</strong>
      </dt>
    </dl>
    <p>任务要求：xxxx</p>
    <div class="task-item-bottom">
      <label>北京驻场无忧科技有限共公司</label>
      <span><van-icon name="location-o" />北京</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  taskList: {
    type: Array<any>,
    default: () => []
  }
})
/**
 * 点击进入详情页
 * @param id  传入id,进入详情页
 */
const gotoDetail = (id: any) => {
  router.push('/task/details/' + id)
}
</script>

<style scoped>
.task-item {
  background: #FFFFFF;
  border-radius: 0.53rem;
  margin: 0 0.64rem 0.53rem;
  padding: 0.88rem 0.48rem 0.75rem;
  position: relative;
  font-size: 0.69rem;
  font-weight: 100;
  color: #666666;
}
.task-item-top {
  display: flex;
}
.task-item-top h3 {
  font-size: 0.91rem;
  line-height: 0.91rem;
  font-weight: 400;
  color: #333333;
  margin-bottom: 1.01rem;
}
.task-item-top span {
  position: absolute;
  right: 0;
  width: 2.29rem;
  height: 1.08rem;
  line-height: 1.08rem;
  background: linear-gradient(90deg, #fea829, #fe8f27);
  border-radius: 0.53rem 0 0 0.53rem;
  text-align: center;
  font-size: 0.59rem;
  color: #ffffff;
}

dl {
  display: flex;
  margin-bottom: 0.8rem;
}
dl dt {
  margin-right: 1.44rem;
}
dl dt h5 {
  font-size: 0.69rem;
  line-height: 0.69rem;
  margin-bottom: 0.53rem;
  font-weight: 100;
  color: #999999;
}
dl dt strong {
  font-size: 0.64rem;
  line-height: 0.64rem;
  display: block;
  font-weight: 500;
  color: #333333;
}
.task-item p {
  color: #333333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.task-item-bottom {
  display: flex;
  border-top: 1px solid #f5f5f5;
  margin-top: 0.72rem;
  padding-top: 0.72rem;
  line-height: 0.69rem;
}
.task-item-bottom label {
  flex: 1;
}
.task-item-bottom span {
  text-align: right;
}
.task-item-bottom i {
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.1rem;
}
</style>
