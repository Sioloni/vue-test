<template>
  <section id="Service">
    <div class="section-heading-text">
      <h1>Services</h1>
      <p>Check out my approach</p>
    </div>
    <div class="section-main-text">
      <div class="caption">
        <img src="../assets/leaf.png" alt="leaf ico" />
        <h3>Approach</h3>
        <p>
          I will work with my guides and yours energetically and telepathically
          to explore your soul path, purpose in life, things that are<br />blocking
          you and how to unblock them, and anything else relevant to your
          happiness, growth and well-being. I work with Leah, a 6th<br />dimensional
          Venusian; the Arcturians, 7th dimensional ETs; Lord Sananda, the
          higher self of Jesus; the angels, archangels and<br />ascended
          masters; and the Founders, a 12th dimensional essence from the Great
          Central Sun.
        </p>
      </div>
      <div class="caption">
        <img src="../assets/heart.png" alt="heart ico" />
        <h3>Researches</h3>
        <p>
          We will explore your past and parallel lifetimes and use special
          spiritual and psychological reframing techniques to alter your<br />timeline.
          This work is especially powerful for healing chronic illnesses and
          core life issues. Suggested Love Offerings: Same<br />schedule as
          Clairvoyant Readings with Conscious Channeling.
        </p>
      </div>
      <div class="caption">
        <img src="../assets/spinach.png" alt="spinach ico" />
        <h3>Offer on techniques</h3>
        <p>
          I might offer you a healing technique, clear your aura, balance your
          chakras, do energy work, or even laying on of hands (if you<br />meet
          me in person). I follow my inner guidance on this. At the very least,
          you will receive a blessing and prayer. I will hold you in the<br />light
          continuously and see you as the perfect manifestation of God that you
          are. If I see imbalances I may or may not bring them to<br />your
          attention before channeling a healing. Sometimes it is best to know
          everything that is going on within; other times it is not <br />
          imperative.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceBlock",
  data() {
    return {};
  },
};
</script>

<style>
section {
  margin-top: 50px;
  background-color: #f0e8ee;
}
.section-heading-text {
  font-size: 56px;
  color: #bc8aac;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.section-heading-text p {
  padding-top: 50px;
}

.section-main-text {
  color: #bc8aac;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
}

.section-main-text h3 {
  padding-bottom: 20px;
}

.section-main-text img {
  padding-right: 20px;
}

.caption {
  width: 80vw;
}
.caption > img {
  width: 80px;
  position: relative;
  left: -80px;
  bottom: -100px;
}

.section-main-text p {
  display: flex;
  flex-direction: column;
}
</style>
