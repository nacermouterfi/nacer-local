<template>
  <div class="container">
    <Header />
    <div class="main">
      <Navbar />
      <div class="content">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.container {
  max-width: 1920px;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: auto 1fr auto;
}

Header {
  grid-area: header;
  width: 100%;
}

.main {
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-areas: 'navbar content';
  width: 100%;
}

.Navbar {
  grid-area: navbar;
}

.content {
  grid-area: content;
  padding: 10px;
  background-color: #fbfafa;
}

Footer {
  grid-area: footer;
  width: 100%;
}
</style>
