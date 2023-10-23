<script setup>
import houses from "@/data/housesM.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇2 === "Y")
    .sort((a, b) => b.AQ2 - a.AQ2),
};
</script>

<template>
  <div class="container">
    <div class="table">
      <h3>A7建案 熱銷排行榜</h3>
      依據前一季成交量排序。
      <p>
        資料來源; Facebook A7重劃區大小事 /
        <a
          href="https://www.facebook.com/groups/1951117865015671/permalink/6307077752752972/"
          >李世豪 2023/08/21</a
        >。
      </p>
      <div class="table-container">
        <div class="table-col">
          <HouseRowM :isHeader="true" />
          <HouseRowM
            v-for="(house, index) in housesOrganized.newSorted"
            :key="house.id"
            :建案="house.建案"
            :AQ1="house.AQ1"
            :AQ2="house.AQ2"
            :AQ3="house.AQ3"
            :PQ1="house.PQ1"
            :PQ2="house.PQ2"
            :PQ3="house.PQ3"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin: 0rem 0;
}
.table h3 {
  margin-bottom: 1rem;
}
.table-container {
  display: flex;
  justify-content: space-between;
}
.table-col {
  width: 100%;
}
</style>
