<template>
  <div>
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam
      doloremque iusto, vero deleniti officiis pariatur nam, officia corrupti
      minima, alias modi. Ullam aliquam recusandae perspiciatis, ratione
      adipisci iste mollitia?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam
      doloremque iusto, vero deleniti officiis pariatur nam, officia corrupti
      minima, alias modi. Ullam aliquam recusandae perspiciatis, ratione
      adipisci iste mollitia?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam
      doloremque iusto, vero deleniti officiis pariatur nam, officia corrupti
      minima, alias modi. Ullam aliquam recusandae perspiciatis, ratione
      adipisci iste mollitia?
    </p>
    <h1>Titles</h1>
    <vs-row>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
    </vs-row>
    <h1>Others</h1>
    <vs-row>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
      <vs-col w="3">
        <Card> </Card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "about",
  components: { Card },
};
</script>
