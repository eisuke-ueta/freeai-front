export const state = () => ({})

export const mutations = {}

export const actions = {
  uploadImage({ commit }, { form }) {
    const formData = new FormData()
    if (form.file) formData.append('file', form.file)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    return this.$axios.post('files/upload', formData, config)
  }
}
