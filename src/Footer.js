export default function Footer({ authors, repolink }) {
  return (
    <footer>
      <author>Authors : {authors} </author>
      <a href={repolink}>Link : {repolink}</a>
    </footer>
  );
}
