<script setup>
import houses from "@/data/houses.json";

const housesOrganized = {
  newSorted: [...houses]
    .filter((house) => house.選擇2 === "Y")
    .sort((a, b) => b.AQ3 - a.AQ3),
};
</script>

<template>
  <div class="">
    <div class="">
      <h3>A7建案 熱銷排行榜</h3>
      依據前一季成交量排序。
      <p>
        資料來源; Facebook A7重劃區大小事 /
        <a
          href="https://www.facebook.com/groups/1951117865015671/permalink/6529109273883151/?mibextid=oMANbw"
          >李世豪 2023/10/21</a
        >。
      </p>
      <div class="">
        <div class="">
          <MarketRow :isHeader="true" />
          <MarketRow
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

<style scoped></style>
