<template>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <h3>Please provide documents</h3>
        <b-form-file
          v-model="file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
  </div>
      <div v-if="!image">
        <h3>Select an image</h3>
        <input type="file" @change="onFileChange">
      </div>
      <div v-else>
        <img :src="image" />
        <b-btn @click="removeImage">Remove image</b-btn>
      </div>
      <b-form-checkbox
        id="checkbox-1"
        v-model="status"
        name="checkbox-1"
        value="Accepted"
        unchecked-value="Not Accepted"
      >
        I accept the terms and use
      </b-form-checkbox>

      <div>Status: <strong>{{ status }}</strong></div>
    </div>
</template>

<script>
export default {
  name: 'BusinessDetails',
  data: function () {
    return {
      status: 'Not Accepted',
      image: ''
    }
  },
  methods: {
    onFileChange (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      this.createImage(files[0])
    },
    createImage (file) {
      // eslint-disable-next-line no-unused-vars
      var image = new Image()
      var reader = new FileReader()
      var vm = this

      reader.onload = (e) => {
        vm.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (e) {
      this.image = ''
    }
  }
}
</script>

<style scoped>

</style>
