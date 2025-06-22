import { createSelector } from "reselect";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) => {
      const nameMatch = contact.name.toLowerCase().includes(normalizedFilter);
      const numberMatch = contact.number.includes(filter);

      return nameMatch || numberMatch;
    });
  }
);
