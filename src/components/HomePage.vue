<template>
  <div>
    <HeaderBlock />
    <MainBlock />
    <ServiceBlock />
    <ListProduct />
    <OnlineRecordBlock />
    <FooterBlock />
  </div>
</template>

<script>
import ListProduct from "../components/ListProduct.vue";
import HeaderBlock from "../components/HeaderBlock.vue";
import MainBlock from "../components/MainBlock.vue";
import ServiceBlock from "../components/ServiceBlock.vue";
import OnlineRecordBlock from "../components/OnlineRecordBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";
export default {
  name: "HomePage",
  components: {
    FooterBlock,
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
