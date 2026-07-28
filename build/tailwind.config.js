/** Build-Config für die statische Auslieferung — spiegelt die frühere Inline-Config (Play-CDN). */
module.exports = {
  content: ['../index.html', '../impressum.html', '../datenschutz.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Instrument Sans','ui-sans-serif','system-ui','sans-serif'],
        mono: ['IBM Plex Mono','ui-monospace','monospace'],
        display: ['Bricolage Grotesque','ui-sans-serif','system-ui','sans-serif'],
      },
      colors: {
        ink:'#0A0C10', navy:'#1E1B4B',
        accent:'#8B5CF6', accent2:'#3B82F6', accentDeep:'#5B21B6',
        paper:'#EFEDE6', line:'#E5E2D8', mute:'#5F5F58',
      },
    },
  },
}
