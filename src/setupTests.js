// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

let list = [
    {
        display_name: 'Fiction',
        list_name_encoded: 'fiction'
    },
    {
        display_name: 'Non-fiction',
        list_name_encoded: 'nonfiction'
    },
    {
        display_name: 'Hardcover',
        list_name_encoded: 'hardcover'
    },
    {
        display_name: 'Business',
        list_name_encoded: 'business'
    }
];

let books = [
    {
        rank: 1,
        title: 'Becoming',
        author: 'Michelle Obama',
        weeks_on_list: 23
    }
];

async function mockFetch(url) {
    switch (url) {
        case '/api/nyt/lists': {
            return {
                json: async () => ({ results: list })
            }
        };
        case '/api/nyt/categories/fiction': {
            return {
                json: async () => ({ results: books })
            }
        };
        default: {
            throw new Error(`unhandled request : ${url}`);
        }
    }
}

beforeAll(() => jest.spyOn(window, 'fetch'));
beforeEach(() => window.fetch.mockImplementation(mockFetch));