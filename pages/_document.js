import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class Document extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
        };
    }

    render() {