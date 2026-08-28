/**
 * KODX.uz — darslar uchun yengil Markdown renderer.
 *
 * Nima uchun o'z renderimiz bor: dars kontenti generator tomonidan hosil
 * qilinadi va unda kod bloklari, callout'lar (`> [!NOTE]`), ro'yxatlar va
 * qalin matn ishlatiladi. Natija `v-html` orqali chiqarilgani uchun kod
 * ichidagi `<div>` kabi belgilar **albatta** ekranlanishi shart — aks holda
 * ular haqiqiy HTML sifatida render bo'ladi.
 */

const CODE_TOKEN = '@@KODXCODE';

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Callout turlari: `> [!NOTE]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!TIP]`. */
const calloutStyles: Record<string, { icon: string; classes: string }> = {
  NOTE: { icon: 'ℹ️', classes: 'bg-blue-500/10 border-blue-500/30 text-blue-200' },
  TIP: { icon: '💡', classes: 'bg-brand-500/10 border-brand-500/30 text-brand-200' },
  IMPORTANT: { icon: '⚠️', classes: 'bg-amber-500/10 border-amber-500/30 text-amber-200' },
  WARNING: { icon: '🚨', classes: 'bg-red-500/10 border-red-500/30 text-red-200' },
  CAUTION: { icon: '🛑', classes: 'bg-red-500/10 border-red-500/30 text-red-200' },
};

/** Qator ichidagi formatlash: kod, qalin, kursiv, havola. */
function renderInline(text: string): string {
  return text
    .replace(
      /`([^`]+)`/g,
      '<code class="px-1.5 py-0.5 rounded-lg bg-surface-900 border border-surface-800 font-mono text-xs text-brand-300">$1</code>',
    )
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em class="italic text-surface-200">$2</em>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-brand-400 underline underline-offset-2 hover:text-brand-300">$1</a>',
    );
}

export function renderMarkdown(source: string): string {
  if (!source) return '';

  const codeBlocks: string[] = [];

  // 1) Kod bloklarini ajratib olamiz — ular ichida markdown ishlanmasligi kerak.
  let text = source.replace(/```([a-zA-Z0-9]*)\n([\s\S]*?)```/g, (_match, lang: string, code: string) => {
    const index = codeBlocks.length;
    const langAttr = lang ? ` data-lang="${escapeHtml(lang)}"` : '';
    codeBlocks.push(
      `<pre class="p-4 rounded-2xl bg-surface-950 border border-surface-800 font-mono text-xs text-cyan-300 overflow-x-auto my-4 shadow-inner"${langAttr}>` +
        `<code>${escapeHtml(code.replace(/\n$/, ''))}</code></pre>`,
    );
    return `\n${CODE_TOKEN}${index}\n`;
  });

  // 2) Qolgan matnni ekranlaymiz (kod bloklari allaqachon xavfsiz).
  text = escapeHtml(text);

  // 3) Blok darajasidagi elementlarni yig'amiz.
  const lines = text.split('\n');
  const out: string[] = [];
  const paragraph: string[] = [];
  let i = 0;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    out.push(
      `<p class="my-3 text-surface-300 text-xs sm:text-sm leading-relaxed">${renderInline(paragraph.join(' '))}</p>`,
    );
    paragraph.length = 0;
  };

  const bullet = /^[-*+]\s+(.*)$/;
  const ordered = /^\d+[.)]\s+(.*)$/;
  const codeToken = new RegExp(`^${CODE_TOKEN}(\\d+)$`);

  while (i < lines.length) {
    const trimmed = lines[i]!.trim();

    // Bo'sh qator — paragrafni yakunlaydi.
    if (!trimmed) {
      flushParagraph();
      i++;
      continue;
    }

    // Kod bloki.
    const code = trimmed.match(codeToken);
    if (code) {
      flushParagraph();
      out.push(codeBlocks[Number(code[1])]!);
      i++;
      continue;
    }

    // Gorizontal chiziq.
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      flushParagraph();
      out.push('<hr class="my-6 border-surface-800/80" />');
      i++;
      continue;
    }

    // Sarlavhalar.
    const heading = trimmed.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      const level = heading[1]!.length;
      const body = renderInline(heading[2]!);
      if (level === 1) {
        out.push(`<h1 class="text-xl sm:text-2xl font-extrabold text-white mt-4 mb-4">${body}</h1>`);
      } else if (level === 2) {
        out.push(
          `<h2 class="text-lg sm:text-xl font-bold text-white mt-8 mb-3 pb-2 border-b border-surface-800/80">${body}</h2>`,
        );
      } else {
        out.push(
          `<h3 class="text-base sm:text-lg font-bold text-white mt-6 mb-2 flex items-center gap-2">` +
            `<span class="text-brand-400">#</span> ${body}</h3>`,
        );
      }
      i++;
      continue;
    }

    // Callout yoki oddiy blockquote (`>` ekranlangani uchun `&gt;`).
    if (trimmed.startsWith('&gt;')) {
      flushParagraph();
      const quoted: string[] = [];
      while (i < lines.length && lines[i]!.trim().startsWith('&gt;')) {
        quoted.push(lines[i]!.trim().replace(/^&gt;\s?/, ''));
        i++;
      }
      const callout = (quoted[0] ?? '').match(/^\[!([A-Z]+)\]\s*(.*)$/);
      if (callout) {
        const style = calloutStyles[callout[1]!] ?? calloutStyles['NOTE']!;
        const body = [callout[2] ?? '', ...quoted.slice(1)].filter(Boolean).join(' ');
        out.push(
          `<div class="my-4 p-4 rounded-2xl border ${style.classes} text-xs sm:text-sm leading-relaxed flex gap-3">` +
            `<span class="shrink-0">${style.icon}</span><div>${renderInline(body)}</div></div>`,
        );
      } else {
        out.push(
          `<blockquote class="my-4 pl-4 border-l-2 border-brand-500/40 text-surface-300 text-xs sm:text-sm leading-relaxed italic">` +
            `${renderInline(quoted.join(' '))}</blockquote>`,
        );
      }
      continue;
    }

    // Ro'yxatlar.
    if (bullet.test(trimmed) || ordered.test(trimmed)) {
      flushParagraph();
      const isOrdered = ordered.test(trimmed);
      const pattern = isOrdered ? ordered : bullet;
      const items: string[] = [];
      while (i < lines.length) {
        const match = lines[i]!.trim().match(pattern);
        if (!match) break;
        items.push(`<li class="pl-1">${renderInline(match[1]!)}</li>`);
        i++;
      }
      const tag = isOrdered ? 'ol' : 'ul';
      const listStyle = isOrdered ? 'list-decimal' : 'list-disc';
      out.push(
        `<${tag} class="${listStyle} pl-6 my-3 space-y-1.5 text-surface-300 text-xs sm:text-sm leading-relaxed marker:text-brand-400">` +
          `${items.join('')}</${tag}>`,
      );
      continue;
    }

    paragraph.push(trimmed);
    i++;
  }

  flushParagraph();
  return out.join('\n');
}
