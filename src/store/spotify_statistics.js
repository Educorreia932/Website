export const state = () => ({
    loading: true,
    topArtists: {}
})

export const mutations = {
    mutateTopArtists(state, {timeRange, payload}) {
        state.topArtists[timeRange] = payload;
    },
    mutateLoading(state, loading) {
        state.loading = loading;
    }
}
