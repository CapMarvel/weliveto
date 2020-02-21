<template>
  <div>
    <navbar></navbar>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar }
};
</script>
