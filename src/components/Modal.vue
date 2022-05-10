<template>
  <div class="modal">
    <div class="modal-content">
      <i
        @click="this.$emit('close-modal')"
        class="fa-solid fa-xmark modal-close-btn"
      ></i>
      <div class="modal-content__info--1">
        <h2 class="modal-content__title">{{ modalInfo.title }}</h2>
        <img
          class="modal-content__image"
          :src="
            modalInfo.picture
              ? modalInfo.picture
              : 'https://static.umotive.com/img/product_image_thumbnail_placeholder.png'
          "
          :alt="modalInfo.title"
        />
        <p class="modal-content__description">{{ modalInfo.description }}</p>
      </div>
      <div class="modal-content__info--2">
        <span class="modal-content__price"
          >R$ {{ parseFloat(modalInfo.price).toFixed(2) }}</span
        >
        <div class="modal-content__rating">
          <span v-show="modalInfo.rating">Avaliação: </span>
          <i
            v-for="index in parseInt(modalInfo.rating)"
            :key="index"
            class="fa-solid fa-star modal-content__rating__star"
          ></i>
        </div>
      </div>
      <div class="modal-content__interact">
        <form
          @submit.prevent="this.$emit('rate-product', modalInfo.id, rating)"
          class="form"
        >
          <label for="rating">Avalie:</label>
          <select v-model="rating" name="rating" id="rating" required>
            <option disabled value="">Escolha</option>
            <option v-for="index of 5" :key="index" :value="index">
              {{ index }} estrelas
            </option>
          </select>
          <button class="submit-btn btn" type="submit">Avaliar</button>
        </form>
        <button
          @click="this.$emit('delete-product', modalInfo.id)"
          class="delete-btn btn"
        >
          Excluir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalInfo: Object,
  },
  data() {
    return {
      rating: "",
    };
  },
  emits: ["close-modal", "rate-product", "delete-product"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.modal {
  position: fixed;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  width: 500px;
  padding: 10px 25px;
  background-color: rgb(250, 250, 250);
  box-shadow: 3px 3px 10px 1px black;
  border-radius: 5px;
  overflow: auto;
  height: 100%;
}

.modal-close-btn {
  cursor: pointer;
  font-size: 30px;
  margin-bottom: 5px;
}

.modal-close-btn:hover {
  color: rgb(0, 90, 175);
}

.modal-content__info--1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(150, 150, 150, 0.5);
  padding-top: 10px;
}

.modal-content__title {
  font-size: 30px;
  margin-bottom: 8px;
}

.modal-content__image {
  max-width: 500px;
  margin-bottom: 8px;
}

.modal-content__description {
  margin: 5px 0;
  line-height: 22px;
  color: #4d4d4d;
}

.modal-content__info--2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}

.modal-content__price {
  display: block;
  font-weight: bold;
  font-size: 24px;
}

.modal-content__rating__star {
  color: rgb(189, 160, 0);
}

.modal-content__interact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
  padding: 15px;
  border-top: 2px solid rgba(50, 50, 50, 0.5);
}

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(50, 50, 50, 0.5);
  padding-bottom: 15px;
}

.form label {
  font-size: 18px;
  margin-bottom: 5px;
}

.form select {
  border: 1px solid rgba(50, 50, 50, 0.5);
  border-radius: 3px;
  padding: 8px;
  margin-bottom: 10px;
}

.delete-btn {
  background-color: rgb(255, 50, 0);
  color: #eee;
  padding: 15px;
  margin-top: 15px;
  width: 100%;
}

.delete-btn:hover {
  background-color: rgb(255, 90, 50);
}

.delete-btn:active {
  background-color: rgb(200, 40, 0);
}

@media screen and (max-width: 500px) {
  .modal-content {
    width: 100vw;
    border-radius: 0;
  }

  .modal-content__title {
    font-size: 24px;
  }

  .modal-content__image {
    width: 250px;
    margin-bottom: 5px;
  }

  .modal-content__description {
    font-size: 12px;
  }

  .modal-content__price {
    font-size: 22px;
  }
}
</style>
