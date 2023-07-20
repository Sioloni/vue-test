<template>
  <div>
    <HeaderBlock />
    <MainBlock />
    <ServiceBlock />
    <ListProduct />
    <OnlineRecordBlock />
  </div>
</template>

<script>
import ListProduct from "../components/ListProduct.vue";
import HeaderBlock from "../components/HeaderBlock.vue";
import MainBlock from "../components/MainBlock.vue";
import ServiceBlock from "../components/ServiceBlock.vue";
import OnlineRecordBlock from "../components/OnlineRecordBlock.vue";
export default {
  name: "HomePage",
  components: {
    ListProduct,
    HeaderBlock,
    MainBlock,
    ServiceBlock,
    OnlineRecordBlock,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
