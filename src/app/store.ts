import { configureStore } from '@reduxjs/toolkit'
// ...
import projectSlice from '../reducers/project/projectSlice'
import skillSlice from '../reducers/skill/skillSlice'
import educationSlice from '../reducers/education/educationSlice'
import experienceSlice from '../reducers/experience/experienceSlice'
import contactSlice from '../reducers/contact/contactSlice'
import certificationSlice from '../reducers/certification/certificationSlice'
import blogSlice from '../reducers/blog/blogSlice'

export const store = configureStore({
    reducer: {
        // ...
        projects : projectSlice,
        skills : skillSlice,
        education : educationSlice,
        experience : experienceSlice,
        contact : contactSlice,
        certifications : certificationSlice,
        blog : blogSlice,

    },
  })


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch