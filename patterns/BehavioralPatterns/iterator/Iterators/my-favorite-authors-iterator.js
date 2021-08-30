class MyFavoriteAuthors {
    constructor() {
        this.allAuthors = {
            fiction: [
                'Agatha Christie',
                'J. K. Rowling',
                'Dr. Seuss'
            ],
            scienceFiction: [
                'Neal Stephenson',
                'Arthur Clarke',
                'Isaac Asimov',
                'Robert Heinlein'
            ],
            fantasy: [
                'J. R. R. Tolkien',
                'J. K. Rowling',
                'Terry Pratchett'
            ],
        }
    }
    [Symbol.iterator]() {

        const genres = Object.values(this.allAuthors);

        let currentAuthorIndex = 0;
        let currentGenreIndex = 0;

        return {
            next() {
                const authors = genres[currentGenreIndex];

                const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
                if (doNothaveMoreAuthors) {
                    currentGenreIndex++;
                    currentAuthorIndex = 0;
                }
                const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
                if (doNotHaveMoreGenres) {
                    return {
                        value: undefined,
                        done: true
                    };
                }

                return {
                    value: genres[currentGenreIndex][currentAuthorIndex++],
                    done: false
                }
            }
        };
    }
};
module.exports = MyFavoriteAuthors;

