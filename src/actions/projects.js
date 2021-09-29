export const startLoadingProjects = () => {
    return async (dispatch) => {
        postsLoaded()
    }
}


const postsLoaded = (posts = []) => ({
    type: types.postsLoaded,
    payload: posts
})