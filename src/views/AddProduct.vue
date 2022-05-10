<template>
  <Header />
  <div class="form-container">
    <form @submit.prevent="submitNewProduct" class="form">
      <h2 class="form__title">Adicione um novo produto</h2>
      <div class="form-control">
        <label for="category">Categoria</label>
        <select v-model="category" name="category" id="category" required>
          <option selected disabled value="">Escolha</option>
          <option value="Burger">Burger</option>
          <option value="Pizza">Pizza</option>
        </select>
      </div>
      <div class="form-control">
        <label for="title">Nome</label>
        <input
          v-model="title"
          placeholder="Pizza de Calabresa"
          id="title"
          type="text"
          required
        />
      </div>
      <div class="form-control">
        <label for="description">Descrição</label>
        <textarea
          v-model="description"
          name="description"
          id="description"
          cols="30"
          rows="5"
          placeholder="Massa, molho e calabresa"
          required
        ></textarea>
      </div>
      <div class="form-control">
        <label for="image">Imagem</label>
        <input
          v-model="picture"
          placeholder="URL da imagem"
          id="image"
          type="text"
        />
      </div>
      <div class="form-control">
        <label for="preco">Preço</label>
        <input
          v-model="price"
          placeholder="25.50"
          id="preco"
          type="number"
          step="0.01"
          required
        />
      </div>
      <input value="Adicionar" class="submit-btn btn" type="submit" />
    </form>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "AddProduct",
  components: {
    Header,
  },
  props: {
    menu: Array,
  },
  data() {
    return {
      title: "",
      description: "",
      price: "",
      picture: "",
      category: "",
    };
  },
  methods: {
    submitNewProduct() {
      let newProduct = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        price: parseFloat(this.price),
        picture: this.picture,
        thumbnail: this.picture,
      };
      this.$emit("submit-product", newProduct, this.category);
      this.title = "";
      this.description = "";
      this.picture = "";
      this.category = "";
      this.price = "";
    },
  },
  emits: ["submit-product"],
};
</script>

<style scoped>
.form-container {
  display: flex;
}

.form {
  background-color: rgb(250, 250, 250);
  border: 1px solid rgba(90, 90, 90, 0.5);
  border-radius: 3px;
  padding: 20px;
  margin: 30px auto;
}

.form__title {
  text-align: center;
  margin-bottom: 20px;
}

.form-control {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.form-control label {
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: bold;
}

.form-control input,
.form-control select,
.form-control textarea {
  border: 1px solid rgba(50, 50, 50, 0.5);
  border-radius: 5px;
  padding: 10px;
  resize: none;
}

.submit-btn {
  margin-top: 20px;
}

@media screen and (max-width: 320px) {
  .form {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
}
</style>
