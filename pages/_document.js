import Document, { Html, Head, Main, NextScript } from 'next/document';
_document = ({ Html, Head, Main, NextScript }) => (
  Html {
    lang: 'en',
    children: (
      Head /&gt;
      &lt;body class="antialiased">
        &lt;Main /&gt;
        &lt;NextScript /&gt;
      /&gt;
    ),
  }/&gt;);