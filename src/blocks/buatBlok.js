export const buatBlok = ({
  id,
  label,
  kategori,
  html,
  css,
  script,
  tag,
  kelas,
}) => ({
  id,
  label,
  category: kategori,
  media: `<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="6" rx="1" fill="currentColor"/></svg>`,
  content: script
    ? {
        tagName: tag,
        attributes: { class: kelas },
        components: `${html}<style>${css}</style>`,
        script,
      }
    : `${html}<style>${css}</style>`,
});
