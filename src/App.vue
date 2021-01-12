<template>
  <div id="app">
    <Navigationbar></Navigationbar>
    <router-view>
      <Layout></Layout>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Layout from './components/Layout/Layout'
  import Navigationbar from './components/Navigationbar/Navigationbar'
  import Footer from './components/Footer/Footer'
export default {
  components : {
   Layout,
   Navigationbar,
   Footer
  },
      created () { 

        // dark theme cheacked
        let darkThemeCheacked = localStorage.getItem('darkmood')

        if (darkThemeCheacked) {
            document.body.classList.add('dark-theme')
        }
    }
}
</script>

