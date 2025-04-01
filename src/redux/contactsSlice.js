// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         items: [...payload],
//         isLoading: false,
//         error: null,
//       };
//     },
//     [fetchContacts.pending]: state => {
//       return { ...state, isLoading: true };
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       return { ...state, error: payload, isLoading: false };
//     },

//     [addContact.fulfilled]: (state, { payload }) => {
//       return {
//         ...state,
//         items: [...state.items, payload],
//         isLoading: false,
//         error: null,
//       };
//     },
//     [addContact.pending]: state => {
//       return { ...state, isLoading: true };
//     },
//     [addContact.rejected]: (state, { payload }) => {
//       return { ...state, error: payload, isLoading: false };
//     },

//     [deleteContact.fulfilled]: (state, { payload }) => {
//       console.log(payload);
//       return {
//         ...state,
//         items: [...state.items.filter(item => item.id !== payload.id)],
//         isLoading: false,
//       };
//     },
//     [deleteContact.pending]: state => {
//       return { ...state, isLoading: true };
//     },
//     [deleteContact.rejected]: (state, { payload }) => {
//       return { ...state, error: payload };
//     },
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  // baseUrl: 'https://connections-api.herokuapp.com',

  baseUrl: 'https://connections-api.goit.global',

  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery,
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),
    getContactById: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: data => ({
        url: '/contacts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation({
      query: ({ name, number, id }) => {
        return {
          url: `/contacts/${id}`,
          method: 'PATCH',
          body: { name, number },
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useGetContactByIdMutation,
  useUpdateContactMutation,
} = contactsApi;
