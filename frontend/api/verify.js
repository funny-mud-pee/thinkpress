export default $axios => () => ({
  tcaptcha(ticket) {
    return $axios.$get(`/verify/tcaptcha?ticket=${ticket}`)
  }
})
