import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import hashtag from "markdown-it-hashtag";

export const md = new MarkdownIt({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (_) {
        /* empty */
      }
    }

    return ""; // use external default escaping
  },
}).use(hashtag);

md.renderer.rules.hashtag_open = (tokens, idx) => {
  const tagName = tokens[idx].content.toLowerCase();

  return `<a href="/tags/${tagName}" class="tag">`;
};
md.renderer.rules.hashtag_text = (tokens, idx) => `#${tokens[idx].content}`;
md.renderer.rules.hashtag_close = () => "</a>";
