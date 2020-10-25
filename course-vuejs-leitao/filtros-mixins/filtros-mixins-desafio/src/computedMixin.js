export default {
    computed: {
        phrasewithComa() {
            return this.phrase.replace(/\s/g, ",");
        },
        phraseWordsLen() {
            return this.phrase
                .split(" ")
                .map((word) => `${word} (${word.length})`)
                .join(" ");
        },
    },
}