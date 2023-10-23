<script setup>
import houses from "@/data/houses.json";
// import { useMeta } from "vue-meta";

const route = useRoute();
const name = route.params.name;

useHead({
  title: "A7建案 - " + name,
});

const house = houses.find((r) => r.建案 === name);

// useMeta({
//   title: house.value ? name : "404 - House Not Found",
//   meta: [
//     {
//       name: "viewport",
//       content: "width=device-width",
//     },
//   ],
// });
// Test
</script>

<template>
  <NuxtLayout name="detailpage">
    <div class="container house-container">
      <h3>{{ house.建案 }} 建案詳細資料</h3>
      <!-- <div class="image-container">
        <img :src="`@/assets/fig/${house.Figure}`" alt="" />
      </div> -->
      <div class="row">
        <div class="col-md-6">
          <div class="image-container">
            <img :src="house.FigureURL" alt="" style="" class="img-fluid" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-container">
            <p>
              資訊來源:
              <a :href="house.Link591"
                ><button class="btn btn-primary">591 房仲網</button>
              </a>
              &nbsp;
              <a :href="house.LinkLG"
                ><button class="btn btn-primary">樂居網</button></a
              >
            </p>
            <table class="table table-sm">
              <tr>
                <td>開價</td>
                <td>{{ house.每坪開價 }} {{ house.比價 }}</td>
              </tr>
              <tr>
                <td>車位</td>
                <td>{{ house.車位價格 }}</td>
              </tr>
              <tr>
                <td>完工</td>
                <td>{{ house.交屋時間 }}</td>
              </tr>
              <tr>
                <td>建設</td>
                <td>
                  {{ house.建設公司 }}
                </td>
              </tr>
              <tr>
                <td>地址</td>
                <td>
                  <a :href="house.LinkAddress">{{ house.基地地址 }}</a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="info-container">
        <div class="row">
          <h3>實價登錄資訊</h3>
          <div class="col-md-6">
            <table class="table table-sm">
              <tr>
                <td>最近一年成交均價</td>
                <td>{{ house.一年成交均價 }} 萬元/每坪</td>
              </tr>
              <tr>
                <td>登錄筆數</td>
                <td>{{ house.登錄筆數 }} 登錄筆數 / 建案總戶數</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-sm">
              <tr>
                <td>最高實價</td>
                <td>{{ house.最高實價 }} 萬元/每坪</td>
              </tr>
              <tr>
                <td>最低實價</td>
                <td>{{ house.最低實價 }} 萬元/每坪</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div class="info-container">
        <div class="row">
          <h3>建築規劃</h3>
          <div class="col-md-6">
            <table class="table table-responsive">
              <tr>
                <td>公設比</td>
                <td>{{ house.公設比例 }}</td>
              </tr>
              <tr>
                <td>建蔽率</td>
                <td>{{ house.建蔽比率 }}</td>
              </tr>
              <tr>
                <td>基地面積</td>
                <td>{{ house.基地面積 }}</td>
              </tr>
              <tr>
                <td>管理費用</td>
                <td>{{ house.管理費用 }}</td>
              </tr>
              <tr>
                <td>土地分區</td>
                <td>{{ house.土地分區 }}</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-responsive">
              <tr>
                <td>棟戶規劃</td>
                <td>{{ house.棟戶規劃 }}</td>
              </tr>
              <tr>
                <td>樓層規劃</td>
                <td>{{ house.樓層規劃 }}</td>
              </tr>
              <tr>
                <td>車位規劃</td>
                <td>{{ house.車位規劃 }}</td>
              </tr>
              <tr>
                <td>車位配比</td>
                <td>{{ house.車位配比 }} 戶數:車位數</td>
              </tr>
              <tr>
                <td>地號</td>
                <td>{{ house.地號 }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div class="info-container">
        <div class="row">
          <h3>建商資料</h3>
          <div class="col-md-6">
            <table class="table table-responsive">
              <tr>
                <td>投資建設</td>
                <td>{{ house.投資建設 }}</td>
              </tr>
              <tr>
                <td>營造公司</td>
                <td>{{ house.營造公司 }}</td>
              </tr>
              <tr>
                <td>建築設計</td>
                <td>{{ house.建築設計 }}</td>
              </tr>
            </table>
          </div>
          <div class="col-md-6">
            <table class="table table-responsive">
              <tr>
                <td>建造執照</td>
                <td>{{ house.建造執照 }}</td>
              </tr>
              <tr>
                <td>使用執照</td>
                <td>{{ house.使用執照 }}</td>
              </tr>
              <tr>
                <td>企劃銷售</td>
                <td>{{ house.企劃銷售 }}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <houseBack />
  </NuxtLayout>
</template>

<style scoped>
.house-container {
  /* display: flex; */
  margin-top: 10px;
}

.image-container img {
  width: 400px;
  height: auto;
}
.info-container {
  padding: 1rem;
  /* width: 50%; */
}

.stats-container {
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
}
.stats-container h5 {
  width: 20rem;
  font-size: 1.2rem;
  margin: 0;
  margin-right: 1.2rem;
}
.stats-container p {
  font-size: 1.2rem;
  margin: 0;
}
.content {
  /* font-size: 1.2rem; */
  margin-top: 1rem;
}
</style>
