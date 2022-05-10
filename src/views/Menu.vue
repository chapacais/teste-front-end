<template>
  <Header />
  <section class="menu">
    <Category
      @open-modal="openModal"
      v-for="(category, index) in menu"
      :key="index"
      :category="category"
    />
  </section>
  <Modal
    @rate-product="rateProduct"
    @delete-product="deleteProduct"
    @close-modal="closeModal"
    v-show="visible"
    :modalInfo="modalInfo"
  />
</template>

<script>
import Category from "../components/Category.vue";
import Header from "../components/Header.vue";
import Modal from "../components/Modal.vue";

export default {
  name: "Menu",
  components: {
    Category,
    Header,
    Modal,
  },
  props: {
    menu: Array,
  },
  data() {
    return {
      visible: false,
      modalInfo: Object,
    };
  },
  methods: {
    openModal(product) {
      this.modalInfo = product;
      this.visible = !this.visible;
    },
    closeModal() {
      this.visible = false;
    },
    deleteProduct(id) {
      if (confirm("Você tem certeza que quer excluir este produto?")) {
        for (let i = 0; i < this.menu.length; i++) {
          this.menu[i].products = this.menu[i].products.filter(
            (product) => product.id != id
          );
        }
        this.visible = false;
      }
    },
    rateProduct(id, rating) {
      for (let i = 0; i < this.menu.length; i++) {
        this.menu[i].products.map((product) => {
          if (product.id == id) {
            product.rating = rating;
            console.log(product);
          }
        });
      }
    },
  },
  emits: ["submit-product"],
};
</script>

<style scoped>
.menu {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
