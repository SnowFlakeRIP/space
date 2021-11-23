<template>
  <main class="main">
    <About />
    <how_to />
    <to__book />
    <info />
    <contacts />
  </main>
</template>

<script>
import About from "./About";
import how_to from "./how_to";
import to__book from "./to__book";
import info from "./info";
import contacts from "./contacts";

export default {
  name: "Main",
  components: {
    About,
    how_to,
    to__book,
    info,
    contacts

  }
}
</script>
