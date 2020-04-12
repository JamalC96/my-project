import Api from '@/services/api'

export default {
  fetchOrganisations () {
    return Api().get('/organisations')
  },

  postOrganisation (organisation) {
    return Api().post('/organisation/register', organisation,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteOrganisation (id) {
    return Api().delete(`/organisations/${id}`)
  }
}
